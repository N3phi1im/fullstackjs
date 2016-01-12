var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(HomeFactory) {
                this.HomeFactory = HomeFactory;
                var vm = this;
                vm.bugs = HomeFactory.listBugs();
            }
            HomeController.prototype.deleteBug = function (id) {
                var _this = this;
                this.HomeFactory.deleteBug(id).then(function () {
                    for (var i = 0; i < _this.bugs.length; i++) {
                        if (_this.bugs[i]._id === id) {
                            _this.bugs.splice(i, 1);
                            break;
                        }
                    }
                });
            };
            return HomeController;
        }());
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));

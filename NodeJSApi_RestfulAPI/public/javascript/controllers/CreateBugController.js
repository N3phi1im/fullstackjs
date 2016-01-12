var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var CreateBugController = (function () {
            function CreateBugController(HomeFactory, $location) {
                this.HomeFactory = HomeFactory;
                this.$location = $location;
                this.bug = {};
            }
            CreateBugController.prototype.createBug = function () {
                var _this = this;
                this.HomeFactory.save(this.bug).then(function () {
                    _this.$location.path('/');
                });
            };
            return CreateBugController;
        }());
        angular.module('app').controller('CreateBugController', CreateBugController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));

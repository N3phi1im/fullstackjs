var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var EditBugController = (function () {
            function EditBugController($location, $routeParams, HomeFactory) {
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.HomeFactory = HomeFactory;
                this.bug = HomeFactory.getBug($routeParams['id']);
            }
            EditBugController.prototype.saveBug = function () {
                var _this = this;
                this.HomeFactory.editBug(this.bug).then(function () {
                    _this.$location.path('/');
                });
            };
            return EditBugController;
        }());
        angular.module('app').controller('EditBugController', EditBugController);
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));

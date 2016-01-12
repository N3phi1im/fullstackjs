var App;
(function (App) {
    var Services;
    (function (Services) {
        var HomeFactory = (function () {
            function HomeFactory($resource) {
                this.BugResource = $resource('/api/bugs/:id', { id: '@_id' }, {
                    update: {
                        method: 'PUT'
                    }
                });
            }
            HomeFactory.prototype.listBugs = function () {
                return this.BugResource.query();
            };
            HomeFactory.prototype.save = function (bug) {
                return this.BugResource.save(bug).$promise;
            };
            HomeFactory.prototype.getBug = function (id) {
                return this.BugResource.get({ id: id });
            };
            HomeFactory.prototype.editBug = function (bug) {
                return this.BugResource.update({ id: bug._id }, bug).$promise;
            };
            HomeFactory.prototype.deleteBug = function (id) {
                return this.BugResource.delete({ id: id }).$promise;
            };
            return HomeFactory;
        }());
        Services.HomeFactory = HomeFactory;
        angular.module('app').service('HomeFactory', HomeFactory);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));

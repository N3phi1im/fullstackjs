namespace App.Controllers {
  class EditBugController {
    public bug;
    saveBug() {
      this.HomeFactory.editBug(this.bug).then(() => {
        this.$location.path('/');
      })
    }
    constructor(private $location: ng.ILocationService, private $routeParams: ng.route.IRouteParamsService, private HomeFactory: App.Services.HomeFactory) {
      this.bug = HomeFactory.getBug($routeParams['id']);
    }
  }
  angular.module('app').controller('EditBugController', EditBugController);
}

namespace App.Controllers {
  class CreateBugController {
    public bug;
    createBug() {
      this.HomeFactory.save(this.bug).then(() => {
        this.$location.path('/');
      })
    }

    constructor(private HomeFactory: App.Services.HomeFactory, private $location: ng.ILocationService) {
      this.bug = {};
    }
  }
  angular.module('app').controller('CreateBugController', CreateBugController);
}

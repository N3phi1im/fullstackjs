namespace App.Controllers {
  class HomeController {
    public bugs;
    deleteBug(id: string) {
      this.HomeFactory.deleteBug(id).then(() => {
        for (var i = 0; i < this.bugs.length; i++) {
          if(this.bugs[i]._id === id) {
            this.bugs.splice(i, 1);
            break;
          }
        }
      });
    }
    constructor(private HomeFactory: App.Services.HomeFactory) {
      var vm = this;
      vm.bugs = HomeFactory.listBugs();
    }
  }

  angular.module('app').controller('HomeController', HomeController);


}

// (function() {
// 	'use strict';
// 	angular.module('app').controller('HomeController', HomeController);
// 	HomeController.$inject = ['HomeFactory'];
//
// 	function HomeController(HomeFactory) {
// 		var vm = this;
// 		vm.bugs = HomeFactory.bugs;
// 		vm.deleteBug = HomeFactory.deleteBug;
// 	}
// })();

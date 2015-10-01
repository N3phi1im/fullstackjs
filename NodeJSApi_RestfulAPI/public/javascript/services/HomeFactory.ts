namespace App.Services {
  export class HomeFactory {
     private BugResource

     public listBugs() {
       return this.BugResource.query();
     }

     public save(bug) {
       return this.BugResource.save(bug).$promise;
     }

     public getBug(id) {
       return this.BugResource.get({id:id});
     }

     public editBug(bug) {
       return this.BugResource.update({id: bug._id}, bug).$promise;
     }

     public deleteBug(id:string) {
       return this.BugResource.delete({id:id}).$promise;
     }

     constructor($resource:ng.resource.IResourceService) {
       this.BugResource = $resource('/api/bugs/:id', {id: '@_id'}, {
         update: {
           method: 'PUT'
         }
       });
     }
   }

   angular.module('app').service('HomeFactory', HomeFactory);
 }

(function() {
  'use strict';
  angular.module('app').factory('HomeFactory', HomeFactory);
  HomeFactory.$inject = ['$http', '$q'];

  function HomeFactory($http, $q) {
    var o = {};
    o.bugs = [];
    o.findBug = function(id) {
      for (var i = 0; i < o.bugs.length; i++) {
        if (o.bugs[i]._id === id)
          return o.bugs[i];
      }
			return null;
    }
    o.getBug = function(id) {
      var q = $q.defer();
      $http.get('/api/bugs/' + id).success(function(res) {
        q.resolve(res);
      }).error(function(res) {
        q.reject(res);
      });
      return q.promise;
    };

    o.createBug = function(bug) {
      var q = $q.defer();
      $http.post('/api/bugs', bug).success(function(res) {
        bug._id = res.name;
        bug.created = res.created;
        o.bugs.push(bug);
        q.resolve();
      });
      return q.promise;
    }

    o.replaceBug = function(newBug, oldBug) {
      var q = $q.defer();
      $http.put('/api/bugs/' + oldBug._id, newBug).success(function(res) {
        o.bugs[o.bugs.indexOf(oldBug)] = newBug;
        q.resolve();
      });
      return q.promise;
    }

    o.editBug = function(newBug, oldBug) {
      var q = $q.defer();
      $http.patch('/api/bugs/' + oldBug._id, newBug).success(function(res) {
        o.bugs[o.bugs.indexOf(oldBug)] = newBug;
        q.resolve();
      });
      return q.promise;
    }

    o.deleteBug = function(bug) {
      $http.delete('/api/bugs/' + bug._id).success(function() {
        o.bugs.splice(o.bugs.indexOf(bug), 1);
      });
    };

    //when the factory loads, get all bugs
    $http.get('/api/bugs').success(function(res) {
      o.bugs.push.apply(o.bugs, res.bugs);
    });

    return o;
  }
})();

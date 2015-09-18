angular.module('starter.services', [])


  .service('Loading', function($ionicLoading, $timeout) {
    this.show = function() {
      $ionicLoading.show({
        template: 'Loading...'
      });
    };
    this.hide = function() {
      $ionicLoading.hide();
    };

    this.toggle= function() {
      var self  = this;
      self.show();

      // wait for 3 seconds and hide the overlay
      $timeout(function() {
        self.hide();
      }, 3000);
    };

  })


.factory('Coordinates', function() {

    coordinates = {};
    coordinates.lat = '';
    coordinates.long = '';
    return coordinates;
  });

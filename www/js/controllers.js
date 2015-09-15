angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

  .controller('ReportsCtrl', function($scope, $http) {

    console.log('I am in reports controller');


    $http.get('http://api.rwlabs.org/v1/reports').then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.reports = resp.data.data;
      //console.log('Success', $scope.reports);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
    //$scope.reports = Reports.all();

})

.controller('DisastersCtrl', function($scope, $http, $rootScope) {

    console.log('I am in disasters controller');

    //$rootScope.$on('$stateChangeSuccess', function(event, toState){
    //  if(toState.url == '/disasters') {
    //
    //  }
    //})

    $http.get('http://api.rwlabs.org/v1/disasters').then(function(resp) {

    // For JSON responses, resp.data contains the result
    $scope.disasters = resp.data.data;
    //console.log('Success', $scope.disasters);
  }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

  .controller('JobsCtrl', function($scope, $http, $rootScope) {

    console.log('I am in jobs controller');

    //$rootScope.$on('$stateChangeSuccess', function(event, toState){
    //  if(toState.url == '/disasters') {
    //
    //  }
    //})

    $http.get('http://api.rwlabs.org/v1/jobs').then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.jobs = resp.data.data;
      //console.log('Success', $scope.disasters);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })


  .controller('TrainingCtrl', function($scope, $http, $rootScope) {
    console.log('I am in training controller');

$http.get('http://api.rwlabs.org/v1/training').then(function(resp) {

  // For JSON responses, resp.data contains the result
  $scope.trainings = resp.data.data;
  //console.log('Success', $scope.disasters);
}, function(err) {
  console.error('ERR', err);
  // err.status will contain the status code
})
});





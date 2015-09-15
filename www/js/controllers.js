angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

  .controller('ReportsCtrl', function($scope, $http) {

    console.log('I am in reports controller');


    $http.get('http://api.rwlabs.org/v1/reports?limit=30').then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.reports = resp.data.data;
      //console.log('Success', $scope.reports);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
    //$scope.reports = Reports.all();

})

  .controller('ReportDetailCtrl', function($scope, $stateParams, $http) {
    var reportId  = $stateParams.reportId;
    console.log('I am inside Report Details controller');
    console.log(reportId);
    $http.get('http://api.rwlabs.org/v1/reports/' + reportId ).then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.report = resp.data.data;
      //console.log('Success', $scope.report);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

  })

.controller('DisastersCtrl', function($scope, $http, $rootScope) {

    console.log('I am in disasters controller');

    //$rootScope.$on('$stateChangeSuccess', function(event, toState){
    //  if(toState.url == '/disasters') {
    //
    //  }
    //})

    $http.get('http://api.rwlabs.org/v1/disasters?limit=30').then(function(resp) {

    // For JSON responses, resp.data contains the result
    $scope.disasters = resp.data.data;
    //console.log('Success', $scope.disasters);
  }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

  .controller('DisasterDetailCtrl', function($scope, $stateParams, $http) {
    console.log('I am inside disaster detail controller');
    var disasterId  = $stateParams.disasterId;
    console.log(disasterId);
    $http.get('http://api.rwlabs.org/v1/disasters/' + disasterId ).then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.disaster = resp.data.data;
      console.log('Success', $scope.disaster);
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

    $http.get('http://api.rwlabs.org/v1/jobs?limit=40').then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.jobs = resp.data.data;
      //console.log('Success', $scope.disasters);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })


  .controller('TrainingCtrl', function($scope, $http, $rootScope) {
    console.log('I am in training controller but in xcode');

$http.get('http://api.rwlabs.org/v1/training?limit=40').then(function(resp) {

  // For JSON responses, resp.data contains the result
  $scope.trainings = resp.data.data;
  //console.log('Success', $scope.disasters);
}, function(err) {
  console.error('ERR', err);
  // err.status will contain the status code
})
});





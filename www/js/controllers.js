angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

  .controller('DonationsCtrl', function($scope) {
    //donation func here
    console.log('I am at donations controller');


  })


  .controller('ReportsCtrl', function($scope, $http, Loading) {

    console.log('I am in reports controller');

    Loading.show();

    $http.get('http://api.rwlabs.org/v1/reports?limit=30').then(function(resp) {


      // For JSON responses, resp.data contains the result
      $scope.reports = resp.data.data;
      Loading.hide();

      //console.log('Success', $scope.reports);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

    //$scope.reports = Reports.all();

})

  .controller('ReportDetailCtrl', function($scope, $stateParams, $http, Loading) {


    var reportId  = $stateParams.reportId;
    console.log('I am inside Report Details controller');
    Loading.show();
    console.log(reportId);
    $http.get('http://api.rwlabs.org/v1/reports/' + reportId ).then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.report = resp.data.data;
      Loading.hide();

      //console.log('Success', $scope.report);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

  })

.controller('DisastersCtrl', function($scope, $http, $rootScope, Loading) {

    console.log('I am in disasters controller');
    Loading.show();


    //$rootScope.$on('$stateChangeSuccess', function(event, toState){
    //  if(toState.url == '/disasters') {
    //
    //  }
    //})

    $http.get('http://api.rwlabs.org/v1/disasters?limit=30').then(function(resp) {

    // For JSON responses, resp.data contains the result
    $scope.disasters = resp.data.data;
      Loading.hide();

    //console.log('Success', $scope.disasters);
  }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

  .controller('DisasterDetailCtrl', function($scope, $stateParams, $http, Loading, Coordinates) {
    $scope.coordData = Coordinates;
    console.log('I am inside disaster detail controller');
    Loading.show();
    var disasterId  = $stateParams.disasterId;
    console.log(disasterId);
    $http.get('http://api.rwlabs.org/v1/disasters/' + disasterId ).then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.disaster = resp.data.data;

      //this console shows lat - [1] - long i [0]
      console.log(resp.data.data[0].fields.primary_country.location[1]);
      $scope.coordData.lat = resp.data.data[0].fields.primary_country.location[1];
      $scope.coordData.long = resp.data.data[0].fields.primary_country.location[0];
      console.log('At disasater detail setting coords');
      console.log($scope.coordData);
      console.log('now logging full coordinates object at disaster detail controller');
      console.log(Coordinates);

      Loading.hide();
      console.log('Success', $scope.disaster);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

  })


  .controller('JobsCtrl', function($scope, $http, $rootScope, Loading) {

    console.log('I am in jobs controller');
    Loading.show();

    //$rootScope.$on('$stateChangeSuccess', function(event, toState){
    //  if(toState.url == '/disasters') {
    //
    //  }
    //})

    $http.get('http://api.rwlabs.org/v1/jobs?limit=40').then(function(resp) {

      // For JSON responses, resp.data contains the result
      $scope.jobs = resp.data.data;
      Loading.hide();
      //console.log('Success', $scope.disasters);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

  .controller('JobDetailCtrl', function($scope, $stateParams, $http, Loading) {
    console.log('I am inside job detail controller');
    Loading.show();
    var jobId = $stateParams.jobId;
    console.log(jobId);
    $http.get('http://api.rwlabs.org/v1/jobs/' + jobId).then(function (resp) {

      // For JSON responses, resp.data contains the result
      $scope.job = resp.data.data;
      Loading.hide();
      console.log('Success', $scope.job);
    }, function (err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })



      .controller('TrainingCtrl', function($scope, $http, $rootScope, Loading) {
    console.log('I am in training controller');
    Loading.show();

$http.get('http://api.rwlabs.org/v1/training?limit=40').then(function(resp) {

  // For JSON responses, resp.data contains the result
  $scope.trainings = resp.data.data;
  Loading.hide();
  //console.log('Success', $scope.disasters);
}, function(err) {
  console.error('ERR', err);
  // err.status will contain the status code
})
})

  .controller('TrainingDetailCtrl', function($scope, $stateParams, $http, Loading) {
    console.log('I am inside training detail controller');
    Loading.show();
    var trainingId = $stateParams.trainingId;
    console.log(trainingId);
    $http.get('http://api.rwlabs.org/v1/training/' + trainingId).then(function (resp) {

      // For JSON responses, resp.data contains the result
      $scope.training = resp.data.data;
      Loading.hide();
      //console.log('Success', $scope.training);
    }, function (err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

  .controller('MapController', function($scope, $ionicLoading, $compile, Coordinates) {
    $scope.initialize = function() {

      $scope.coordData = Coordinates;
      console.log('My coords in map controller');
      console.log('lat');
      console.log($scope.coordData.lat);
      console.log('long');
      console.log($scope.coordData.long);

      console.log("Inside Map controller");
      var myLatlng = new google.maps.LatLng($scope.coordData.lat, $scope.coordData.long);

      var mapOptions = {
        center: myLatlng,
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
      console.log('My map object');
      console.log(map);



      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Disaster Area)'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    }
    //google.maps.event.addDomListener(window, 'load', initialize);


  })










// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
      //cache: false,
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  //
    .state('tab.reports', {
      url: '/reports',
      //cache: false,
      views: {
        'tab-reports': {
          templateUrl: 'templates/tab-reports.html',
          controller: 'ReportsCtrl'
        }
      }
    })

    .state('tab.report-detail', {
      url: '/reports/:reportId',
      cache: false,
      views: {
        'tab-reports': {
          templateUrl: 'templates/report-detail.html',
          controller: 'ReportDetailCtrl'
        }
      }
    })

    .state('tab.disasters', {
      url: '/disasters',
      //cache: false,
      views: {
        'tab-disasters': {
          templateUrl: 'templates/tab-disasters.html',
          controller: 'DisastersCtrl'
        }
      }
    })

    .state('tab.disaster-detail', {
      url: '/disasters/:disasterId',
      cache: false,
      views: {
        'tab-disasters': {
          templateUrl: 'templates/disaster-detail.html',
          controller: 'DisasterDetailCtrl'
        }
      }
    })

    .state('tab.jobs', {
      url: '/jobs',
      //cache: false,
      views: {
        'tab-jobs': {
          templateUrl: 'templates/tab-jobs.html',
          controller: 'JobsCtrl'
        }
      }
    })

    .state('tab.job-detail', {
      url: '/jobs/:jobId',
      cache: false,
      views: {
        'tab-jobs': {
          templateUrl: 'templates/job-detail.html',
          controller: 'JobDetailCtrl'
        }
      }
    })

    .state('tab.training', {
      url: '/training',
      //cache: false,
      views: {
        'tab-training': {
          templateUrl: 'templates/tab-training.html',
          controller: 'TrainingCtrl'
        }
      }
    })

    .state('tab.training-detail', {
      url: '/training/:trainingId',
      cache: false,
      views: {
        'tab-training': {
          templateUrl: 'templates/training-detail.html',
          controller: 'TrainingDetailCtrl'
        }
      }
    })

    .state('tab.donations', {
      url: '/donations',
      //cache: false,
      views: {
        'tab-donations': {
          templateUrl: 'templates/tab-donations.html',
          controller: 'DonationsCtrl'
        }
      }
    })

    .state('tab.map', {
      url: '/map',
      //cache: false,
      views: {
        'tab-map': {
          templateUrl: 'templates/tab-map.html',
          controller: 'MapController'
        }
      }
    })





  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/reports');

});

angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
       StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('homePage',{
      url:'/homePage',
      templateUrl:'templates/homePage.html'
      // controller:'homePageCtrl'
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.badiKhabar',{
    url: '/badiKhabarein',
    views:{
      'menuContent':{
        templateUrl:'templates/badiKhabarein.html',
        controller:'BadiKhabareinCtrl'
      }
    }
  })

  .state('app.badiKhabareinId', {
    url: '/badiKhabarein/:badiKhabareinId',
    views: {
      'menuContent': {
        templateUrl: 'templates/badiKhabareindetail.html',
        controller: 'BadiKhabareinDetailCtrl'
      }
    }
  })

  
  .state('app.tazakhabar',{
    url: '/tazaKhabarein',
    views:{
      'menuContent':{
        templateUrl:'templates/tazaKhabarein.html',
        controller:'TazaKhabareinCtrl'
      }
    }
  })

 .state('app.tazaKhabareinId', {
    url: '/tazaKhabarein/:tazaKhabareinId',
    views: {
      'menuContent': {
        templateUrl: 'templates/tazaKhabareindetail.html',
        controller: 'TazaKhabareinDetailCtrl'
      }
    }
  })


.state('app.rajya',{
    url: '/rajya',
    views:{
      'menuContent':{
        templateUrl:'templates/rajya.html',
        controller:'RajyaCtrl'
      }
    }
  })

.state('app.rajyaId', {
    url: '/rajya/:rajyaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/rajyaDetail.html',
        controller: 'RajyaDetailCtrl'
      }
    }
  })

.state('app.rashtriya', {
    url: '/rashtriya',
    views: {
      'menuContent': {
        templateUrl: 'templates/rashtriya.html',
        controller:'RashtriyaCtrl'
      }
    }
  })

.state('app.rashtriyaId', {
    url: '/rashtriya/:rashtriyaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/rashtriyaDetail.html',
        controller: 'RashtriyaDetailCtrl'
      }
    }
  })


  .state('app.cricket', {
      url: '/cricket',
      views: {
        'menuContent': {
          templateUrl: 'templates/cricket.html',
          controller:'CricketCtrl'
        }
      }
    })

  .state('app.cricketId', {
    url: '/cricket/:cricketId',
    views: {
      'menuContent': {
        templateUrl: 'templates/cricketDetail.html',
        controller: 'CricketDetailCtrl'
      }
    }
  })


.state('app.manoranjan',{
    url: '/manoranjan',
    views:{
      'menuContent':{
        templateUrl:'templates/manoranjan.html',
        controller:'ManoranjanCtrl'
      }
    }
  })

.state('app.manoranjanId', {
    url: '/manoranjan/:manoranjanId',
    views: {
      'menuContent': {
        templateUrl: 'templates/manoranjanDetail.html',
        controller: 'ManoranjanDetailCtrl'
      }
    }
  })


.state('app.duniya',{
    url: '/duniya',
    views:{
      'menuContent':{
        templateUrl:'templates/duniya.html',
        controller:'DuniyaCtrl'
      }
    }
  })


.state('app.duniyaId', {
    url: '/duniya/:duniyaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/duniyaDetail.html',
        controller: 'DuniyaDetailCtrl'
      }
    }
  })

.state('app.tech',{
    url: '/tech',
    views:{
      'menuContent':{
        templateUrl:'templates/tech.html',
        controller:'TechGyaanCtrl'
      }
    }
  })

.state('app.techId', {
    url: '/tech/:techId',
    views: {
      'menuContent': {
        templateUrl: 'templates/techDetail.html',
        controller: 'TechDetailCtrl'
      }
    }
  })



.state('app.kaarobar',{
    url: '/kaarobar',
    views:{
      'menuContent':{
        templateUrl:'templates/kaarobar.html',
        controller:'KaarobarCtrl'
      }
    }
  })


.state('app.karobaarId', {
    url: '/kaarobar/:karobaarId',
    views: {
      'menuContent': {
        templateUrl: 'templates/karobaarDetail.html',
        controller: 'KarobaarDetailCtrl'
      }
    }
  })

.state('app.auto',{
    url: '/auto',
    views:{
      'menuContent':{
        templateUrl:'templates/auto.html',
        controller:'AutoCtrl'
      }
    }
  })

.state('app.autoId', {
    url: '/auto/:autoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/autoDetail.html',
        controller: 'AutoDetailCtrl'
      }
    }
  })

.state('app.khel',{
    url: '/khel',
    views:{
      'menuContent':{
        templateUrl:'templates/khel.html',
        controller:'KhelCtrl'
      }
    }
  })

.state('app.khelId', {
    url: '/khel/:khelId',
    views: {
      'menuContent': {
        templateUrl: 'templates/khelDetail.html',
        controller: 'KhelDetailCtrl'
      }
    }
  })


.state('app.zaraHatke',{
    url: '/zaraHatke',
    views:{
      'menuContent':{
        templateUrl:'templates/hatke.html',
        controller:'ZaraHatkeCtrl'
      }
    }
  })

.state('app.hatkeId', {
    url: '/zaraHatke/:hatkeId',
    views: {
      'menuContent': {
        templateUrl: 'templates/hatkeDetail.html',
        controller: 'HatkeDetailCtrl'
      }
    }
  })


.state('app.fashion', {
      url: '/fashion',
      views: {
        'menuContent': {
          templateUrl: 'templates/fashion.html',
          controller: 'FashionCtrl'
        }
      }
    })


.state('app.fashionId', {
    url: '/fashion/:fashionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/fashionDetail.html',
        controller: 'FashionDetailCtrl'
      }
    }
  });

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/homePage');
  // $urlRouterProvider.otherwise('/homePage');

});

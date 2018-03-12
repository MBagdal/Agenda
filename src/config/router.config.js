var app = angular.module('agenda',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('welcome',{
        url: '/',
        templateUrl: '../views/welcome.html',
        controller: 'welcomeCtrl'
    })
    .state('contact',{
        url: '/contact',
        templateUrl: '../views/contact.html',
        controller: 'contactCtrl'
    });
});
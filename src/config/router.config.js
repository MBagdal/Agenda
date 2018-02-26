var app = angular.module('agenda',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/erro');

    $stateProvider
    .state('welcome',{
        url: '/',
        templateUrl: '../views/welcome.html',
    })
    .state('contact',{
        url: '/contact',
        templateUrl: '../views/contact.html',
        controller: 'contactCtrl'
    })
    .state('login',{
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'loginCtrl'
    })
    .state('erro',{
        url: '/erro',
        templateUrl : '../views/error.html'
    });
});
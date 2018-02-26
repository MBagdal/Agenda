var appConfig = angular.module('agenda',['ui.router']);

appConfig.config(function($stateprovider){
    $stateprovider.state(
        'contact',{
            url: '/',
            templateurl: 'contact.html',
            controller: 'contactCtrl'
        },
        'contact.login',{
            url: '/contact/login',
            templateurl: 'login.html',
            controller: 'loginCtrl'
        }
    );
});
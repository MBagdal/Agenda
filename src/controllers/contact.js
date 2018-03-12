app.controller('contactCtrl',function($scope,$rootScope){
    $scope.title = "Bem vindo a sua Agenda Eletronica";

    $scope.contacts = [
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
        {name: 'marco', phone: 12345678},
    ];
    
    $scope.checkAutoLogin = function(){
        $rootScope.$broadcast('AutoLogin');
    };
});
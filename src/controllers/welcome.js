app.controller('welcomeCtrl',function($scope,$state,$rootScope){
    $scope.titleForm = 'Agenda do Bagdal';
    
    $scope.email = '';
    $scope.senha = '';

    $scope.logar = function(email,senha){
        if(email == 'marco@hotmail.com' && senha == 12345){
            localStorage.setItem('autoLogin', JSON.stringify({'email': email, 'password': senha}) );
            $state.go('contact');
        }else{
            toastr.error('login ou senha invalida');
        }
    };
    
    $rootScope.$on('AutoLogin', function(event, data) {
        $scope.CheckIsAutoLogin();
        toastr.success('Foi');
    });

    $scope.CheckIsAutoLogin = function(){
        console.log('chegou aqui');
        var autoLoginData = JSON.parse(localStorage.getItem('autoLogin'));

        if(autoLoginData){
            $state.go('contact');
            console.log('locastorage', autoLoginData.email);
        }else{
            toastr.error('Voce deve se logar primeiro');
        }
    };
});
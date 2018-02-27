app.controller('welcomeCtrl',function($scope){
    $scope.titleForm = 'Agenda do Bagdal';
    
    $scope.email;
    $scope.senha;

    $scope.logar = function(email,senha){
        if(email == 'marco@hotmail.com' && senha == 12345){
            toastr.success('Acertou mizeravi');
        }else{
            toastr.error('login ou senha invalida');
        }
    }
});
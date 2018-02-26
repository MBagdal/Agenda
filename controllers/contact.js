app.controller('contactCtrl',function($scope){
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

    toastr.success('Seja bem vindo a sua agenda digital');
    toastr.success('voce tem ' + $scope.contacts.length + ' contatos');
});
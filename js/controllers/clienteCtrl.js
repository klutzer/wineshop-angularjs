/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller("clienteCtrl", function ($scope, clienteService, ngToast) {

    "use strict";

    $scope.clientes = [];
    
    var carregarClientes = function () {
        clienteService.get().success(function (data) {
            $scope.clientes = data;
        }).error(function(data) {
            console.log("Erro: "+data);
        });
    };

    $scope.reset = function () {
        delete $scope.cliente;
        $scope.formCadastro.$setPristine();
        document.getElementById('nome').focus();
        carregarClientes();
    };
    
    $scope.salvarCliente = function (cliente) {
        clienteService.save(cliente).then(function (response) {
            ngToast.info("Cliente nº "+response.data.id+" adicionado!");
            $scope.reset();
        });
    };
    
    $scope.removerCliente = function (cliente) {
        clienteService.remove(cliente).then(function (response) {
            ngToast.info(response.data.msg);
            $scope.reset();
        }, function (response) {
            if (response.data.msg) {
                ngToast.warning(response.data.msg);
            }else {
                ngToast.danger(response.statusText);
            }
        });
    };
    
    $scope.editar = function (cliente) {
        $scope.cliente = cliente;
        //$scope.cliente = angular.copy(cliente);
    };
    
    carregarClientes();

});
/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller("vinhoCtrl", function ($scope, ngToast, vinhoService) {

    "use strict";

    $scope.vinho = {};
    $scope.vinho.valor = 0;

    var carregaTipos = function () {
    	vinhoService.getTipos().then(function (response) {
    		$scope.tipos = response.data;
    	});
    };

    var carregarVinhos = function () {
        vinhoService.get().then(function (response) {
            $scope.vinhos = response.data;
        }, function (response) {
            console.log("Erro: "+response.statusText);
        });
    };

    $scope.reset = function () {
        delete $scope.vinho;
        $scope.formCadastro.$setPristine();
        document.getElementById('descricao').focus();
        carregarVinhos();
    };

    carregaTipos();
});
/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller("vinhoCtrl", function ($scope, ngToast, vinhoService) {

    "use strict";

    $scope.vinho = {};
    $scope.vinho.valor = 0;

    var carregarTipos = function () {
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

    carregarTipos();
    carregarVinhos();

    $scope.reset = function () {
        delete $scope.vinho;
        $scope.formCadastro.$setPristine();
        document.getElementById('descricao').focus();
        carregarVinhos();
    };

    $scope.salvarVinho = function (vinho) {
    	vinhoService.save(vinho).then(function (response) {
    		ngToast.info("Vinho adicionado com código "+response.data.id+"!");
    		$scope.reset();
    	});
    };

    $scope.removerVinho = function (vinho) {
    	vinhoService.remove(vinho).then(function (response) {
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

    $scope.editar = function (vinho) {
        $scope.vinho = vinho;
        //$scope.vinho = angular.copy(vinho);
    };
});
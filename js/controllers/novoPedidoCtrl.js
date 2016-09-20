/*jslint white:true*/
/*global angular, bootbox*/
angular.module("wineshop").controller("novoPedidoCtrl", function ($scope, $cookies, KEYS, vinhoService, clienteService) {
	
	"use strict";
	
	var loadPedido = function () {
		$scope.pedido = $cookies.getObject(KEYS.pedidoAtual);
		if (!$scope.pedido) {
			$scope.pedido = {};
			$scope.pedido.itens = [];
		}
	};
	
	var verificaDuplicado = function (item) {
		var i;
		for (i = 0; i < $scope.pedido.itens.length; i++) {
			if ($scope.pedido.itens[i].vinho.id === item.vinho.id) {
				return true;
			}
		}
		return false;
	};

	var getVinhos = function () {
		return vinhoService.get().success(function(data) {
			$scope.vinhos = data;
		});
	};

	var getClientes = function () {
		return clienteService.get().success(function(data) {
			$scope.clientes = data;
		});
	};
	
	loadPedido();
	
	$scope.item = {};
	$scope.item.qtde = 1;
	
	$scope.adicionarItem = function (item) {
		if (verificaDuplicado(item)) {
			bootbox.alert("Este vinho já está inserido em seu pedido!");
			return;
		}
		$scope.pedido.itens.push(item);
		$scope.item = {};
		$scope.item.qtde = 1;
		$scope.formCadastro.$setPristine();
		$cookies.putObject(KEYS.pedidoAtual, $scope.pedido);
	};
	
	$scope.removerItem = function (index) {
		$scope.pedido.itens.splice(index, 1);
		$cookies.putObject(KEYS.pedidoAtual, $scope.pedido);
	};
	
	$scope.limparPedido = function () {
		$cookies.remove(KEYS.pedidoAtual);
		//$scope.formCadastro.$setPristine();
		//$scope.formPedido.$setPristine();
		loadPedido();
	};
	
    getClientes();
	getVinhos();

});
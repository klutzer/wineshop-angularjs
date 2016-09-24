/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller('finalizarPedidoCtrl', function ($scope, $cookies, $state, 
    KEYS, pedidoService, ngToast) {

    "use strict";

    var verificaPedidoAtual = function () {
        $scope.pedido = $cookies.getObject(KEYS.pedidoAtual);
        if (!$scope.pedido) {
            $state.go("main.novoPedido");
        }else {
            pedidoService.calcularTotais($scope.pedido).then(function (response) {
                $scope.pedido = response.data;
            }, function (response) {
                console.log("Erro: "+response.statusText);
            });
        }
    };

    verificaPedidoAtual();

    $scope.concluirPedido = function (pedido) {
        $scope.concluirDisabled = true;
        pedidoService.add(pedido).then(function (response) {
            ngToast.info("Pedido nº "+response.data.id+" cadastrado!");
            $cookies.remove(KEYS.pedidoAtual);
            $state.go("main.novoPedido");
        }).finally(function () {
            $scope.concluirDisabled = false;
        });
    };

});
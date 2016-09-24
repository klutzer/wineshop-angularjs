/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller("pedidoCtrl", function ($scope, ngToast, pedidoService) {

    "use strict";

    var listarPedidos = function () {
        pedidoService.list().then(function (response) {
            $scope.pedidos = response.data;
        });
    };

    listarPedidos();

    $scope.removerPedido = function (pedido) {
    	pedidoService.remove(pedido).then(function (response) {
    		ngToast.info(response.data.msg);
    		listarPedidos();
    	}, function (response) {
            if (response.data && response.data.msg) {
                ngToast.warning(response.data.msg);
            } else {
                ngToast.danger(response.statusText);
            }
        });
    };

});
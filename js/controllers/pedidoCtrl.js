/*jslint white:true*/
/*global angular*/
angular.module("wineshop").controller("pedidoCtrl", function ($scope, pedidoService) {

    "use strict";

    var listarPedidos = function() {
        pedidoService.list().then(function (response) {
            $scope.pedidos = response.data;
        });
    };

    listarPedidos();

});
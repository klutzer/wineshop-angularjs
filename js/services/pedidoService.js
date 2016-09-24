/*jslint white:true*/
/*global angular*/
angular.module("wineshop").service("pedidoService", function ($http, config) {

    "use strict";

    this.calcularTotais = function (pedido) {
        return $http.post(config.baseUrl + "/venda/calcularTotais", pedido);
    };

    this.add = function (pedido) {
        return $http.post(config.baseUrl + "/venda", pedido);
    };

    this.remove = function (pedido) {
        return $http.delete(config.baseUrl + "/venda/" + pedido.id);
    };

    this.list = function () {
        return $http.get(config.baseUrl + "/venda");
    };
});

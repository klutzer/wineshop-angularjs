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

    carregaTipos();
});
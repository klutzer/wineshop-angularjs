/*jslint white:true*/
/*global angular*/
angular.module("wineshop").service("vinhoService", function($http, config) {

    "use strict";

    this.get = function () {
        return $http.get(config.baseUrl + "/vinho");
    };

    this.save = function (vinho) {
    	return $http.put(config.baseUrl + "/vinho", vinho);
    };

    this.remove = function (vinho) {
        return $http.delete(config.baseUrl + "/vinho/" + vinho.id);
    };

    this.getTipos = function () {
        return $http.get(config.baseUrl + "/tipo");
    };
    
});

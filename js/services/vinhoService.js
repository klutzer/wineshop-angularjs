/*jslint white:true*/
/*global angular*/
angular.module("wineshop").service("vinhoService", function($http, config) {

    "use strict";

    this.get = function () {
        return $http.get(config.baseUrl + "/vinho");
    };

    this.save = function () {
    	return $http.put(config.baseUrl + "/vinho");
    };

    this.getTipos = function () {
        return $http.get(config.baseUrl + "/tipo");
    };
    
});

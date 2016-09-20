angular.module("wineshop").service("pedidoService", function($http, config) {

	this.calcularTotais = function(pedido) {
		return $http.post(config.baseUrl + "/venda/calcularTotais", pedido);
	};
	
});

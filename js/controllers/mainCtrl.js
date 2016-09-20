angular.module("wineshop").controller("mainCtrl", function($scope, $state, KEYS) {

  $scope.logout = function() {
    window.localStorage.removeItem(KEYS.user);
    $state.go("login");
  };

  $scope.isActive = function(state) {
    return $state.current.name === state;
  };

  $scope.treeMeusDados = [{
    name: "Clientes",
    link: "main.cliente"
  }, {
    name: "Vinhos",
    link: "main.vinho"
  }, {
    name: "Pedidos",
    link: "main.pedido"
  }];
});

angular.module("wineshop")

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/login");

  // Now set up the states
  $stateProvider
  .state('login', {
    url: "/login",
    controller: "loginCtrl as ctrl",
    templateUrl: "view/login.html"
  })
  .state('main', {
    abstract: true,
    authenticated: true,
    url: "/main",
    controller: "mainCtrl",
    templateUrl: "view/main.html"
  })
  .state('main.home', {
    authenticated: true,
    url: "",
    templateUrl: "view/home.html"
  })
  .state("main.cliente", {
    authenticated: true,
    url: "/cliente",
    controller: "clienteCtrl",
    templateUrl: "view/cliente.html"
  })
  .state("main.vinho", {
    authenticated: true,
    url: "/vinho",
    controller: "vinhoCtrl",
    templateUrl: "view/vinho.html"
  })
  .state("main.novoPedido", {
    authenticated: true,
    url: "/novoPedido",
    controller: "novoPedidoCtrl",
    templateUrl: "view/novoPedido.html"
  })
  .state("main.finalizarPedido", {
    authenticated: true,
    url: "/finalizarPedido",
    controller: "finalizarPedidoCtrl",
    templateUrl: "view/finalizarPedido.html"
  })
  .state("main.pedido", {
    authenticated: true,
    url: "/pedido",
    controller: "pedidoCtrl",
    templateUrl: "view/pedido.html"
  });
});

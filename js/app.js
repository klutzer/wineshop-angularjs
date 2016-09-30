/*jslint white:true*/
/*global angular, window*/
angular.module("wineshop", ["ng-currency", "ui.bootstrap", "ui.router", "ui.navbar", "ngCookies", 
    "ngToast", "ngAnimate", "ngSanitize", "duScroll", "angular-confirm"]);

angular.module("wineshop")
.constant("KEYS", {
    user: "userKey",
    pedidoAtual: "wineshopPedidoAtualKey"
})
.constant("config", {
  baseUrl: "http://localhost:8080/wineshop/api"
})
.config(['ngToastProvider', function (ngToastProvider) {
  ngToastProvider.configure({
    animation: 'slide',
    horizontalPosition: 'center'
  });
}])
.run(function ($rootScope, $state, KEYS) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
    console.log(fromState.name+" -> "+toState.name);
    if (window.localStorage.getItem(KEYS.user)) {
      if (toState.name === "login") {
        console.log("Tentando acessar login estando logado!");
        event.preventDefault();
        $state.go("main.home");
      }
    }else {
      if (toState.authenticated) {
        console.log("Redirecionando para login");
        event.preventDefault();
        $state.go("login");
      }
    }
  });
})
.run(function($confirmModalDefaults) {
  $confirmModalDefaults.defaultLabels.title = 'Confirmar';
  $confirmModalDefaults.defaultLabels.ok = 'Sim';
  $confirmModalDefaults.defaultLabels.cancel = 'Não';
});

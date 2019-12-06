// Controller escola
let escolaController = function($scope, $mdToast, $state, escolaApi) {
    $scope.escola = {};

    // Criar uma cópia da escola do $scope.
    let escola = angular.copy($scope.escola);

    $scope.cadastrar = function() {
      escolaApi.cadastrar($scope.escola)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('A Escola foi cadastrada com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.escola;

          $scope.escola = {};

          $scope.escolaForm.$setPristine();
          $scope.escolaForm.$setUntouched();
          $scope.escolaForm.$setValidity();

          // Redirecionamento de página.
          $state.transitionTo('escolas', {reload: true, inherit: false, notify: true});

        })
        .catch(function(error) {
          console.log(error)
          let toast = $mdToast.simple()
                      .textContent('Algum problema ocorreu no envio dos dados')
                      .position('top right')
                      .action('OK')
                      .hideDelay(6000);
                  $mdToast.show(toast);
        });
    }
}

app.controller("EscolaController", escolaController);

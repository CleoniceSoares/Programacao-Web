// Controller escola
let escolaController = function($scope, $mdToast, escolaApi) {
    $scope.escola = {};

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

// Controller escola
let escolaController = function($scope, $mdToast, escolaApi) {
    $scope.escola = {};

    $scope.cadastrar = function() {
      escolaApi.cadastrar($scope.escola)
        .then(function(response) {})
        .catch(function(error) {
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

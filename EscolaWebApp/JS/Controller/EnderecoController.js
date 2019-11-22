// Controller endereço
let enderecoController = function($scope, $mdToast, enderecoApi) {
    $scope.endereco = {};

    $scope.cadastrar = function() {
      enderecoApi.cadastrar($scope.endereco)
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

app.controller("EnderecoController", enderecoController);

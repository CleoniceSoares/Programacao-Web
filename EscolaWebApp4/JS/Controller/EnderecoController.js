// Controller endereço
let enderecoController = function($scope, $mdToast, enderecoApi) {
    $scope.endereco = {};

    $scope.cadastrar = function() {
      enderecoApi.cadastrar($scope.endereco)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('O Endereco foi cadastrado com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.endereco;

          $scope.endereco = {};

          $scope.enderecoForm.$setPristine();
          $scope.enderecoForm.$setUntouched();
          $scope.enderecoForm.$setValidity();
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

app.controller("EnderecoController", enderecoController);

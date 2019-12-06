// Controller endereço
let enderecoController = function($scope, $mdToast, $state, enderecoApi) {
    $scope.endereco = {};

    // Criar uma cópia do endereço do $scope.
    let endereco = angular.copy($scope.endereco);

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

          // Redirecionamento de página.
          $state.transitionTo('enderecos', {reload: true, inherit: false, notify: true});

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

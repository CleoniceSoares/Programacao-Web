let ltEnderecosController = function($scope, $mdToast, enderecoApi) {

  $scope.enderecos = [];

  $scope.listar = function() {
    console.log("Listando")
    enderecoApi.listar()
      .then(function(response) {
        $scope.enderecos = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      enderecoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.enderecos = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.enderecos = [];
  };

}

app.controller('LtEnderecosController', ltEnderecosController);

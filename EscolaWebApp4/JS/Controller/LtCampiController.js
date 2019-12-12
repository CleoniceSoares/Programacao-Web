let ltCampiController = function($scope, $mdToast, campusApi) {

  $scope.campus = [];

  $scope.listar = function() {
    console.log("Listando")
    campusApi.listar()
      .then(function(response) {
        $scope.campus = response.data;
      })
      .catch(function(error) {

      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      campusApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.campus = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.sigla = "";
    $scope.campus = [];
  };

}

app.controller('LtCampiController', ltCampiController);

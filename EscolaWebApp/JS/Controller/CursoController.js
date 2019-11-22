// Controller curso
let cursoController = function($scope, $mdToast, cursoApi) {
    $scope.curso = {};

    $scope.cadastrar = function() {
      cursoApi.cadastrar($scope.curso)
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

app.controller("CursoController", cursoController);

// Controller curso
let cursoController = function($scope, $mdToast, cursoApi) {
    $scope.curso = {};

    $scope.cadastrar = function() {
      cursoApi.cadastrar($scope.curso)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('O Curso foi cadastrado com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.curso;

          $scope.curso = {};

          $scope.cursoForm.$setPristine();
          $scope.cursoForm.$setUntouched();
          $scope.cursoForm.$setValidity();
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

app.controller("CursoController", cursoController);

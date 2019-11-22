// Controller turma
let turmaController = function($scope, $mdToast, turmaApi) {
    $scope.turma = {};

    $scope.cadastrar = function() {
      turmaApi.cadastrar($scope.turma)
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

app.controller("TurmaController", turmaController);

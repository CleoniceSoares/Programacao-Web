// Controller disciplina
let disciplinaController = function($scope, $mdToast, disciplinaApi){
    $scope.disciplina = {};

    $scope.cadastrar = function() {
      disciplinaApi.cadastrar($scope.disciplina)
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

app.controller("DisciplinaController", disciplinaController);

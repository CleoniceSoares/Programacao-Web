// Controller professor
let professorController = function($scope, $mdToast, professorApi) {
    $scope.professor = {};

    $scope.cadastrar = function() {
      professorApi.cadastrar($scope.professor)
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

app.controller("ProfessorController", professorController);

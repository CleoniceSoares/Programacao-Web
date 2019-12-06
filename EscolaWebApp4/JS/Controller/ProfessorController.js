// Controller professor
let professorController = function($scope, $mdToast, $state, professorApi) {
    $scope.professor = {};

    // Criar uma cópia do professor do $scope.
    let professor = angular.copy($scope.professor);

    $scope.cadastrar = function() {
      professorApi.cadastrar($scope.professor)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('O Professor foi cadastrado com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.professor;

          $scope.professor = {};

          $scope.professorForm.$setPristine();
          $scope.professorForm.$setUntouched();
          $scope.professorForm.$setValidity();

          // Redirecionamento de página.
          $state.transitionTo('professores', {reload: true, inherit: false, notify: true});

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

app.controller("ProfessorController", professorController);

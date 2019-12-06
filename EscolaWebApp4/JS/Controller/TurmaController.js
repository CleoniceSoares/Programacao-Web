// Controller turma
let turmaController = function($scope, $mdToast, $state, turmaApi) {
    $scope.turma = {};

    // Criar uma cópia da turma do $scope.
    let turma = angular.copy($scope.turma);

    $scope.cadastrar = function() {
      turmaApi.cadastrar($scope.turma)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
              .textContent('A turma foi cadastrada com sucesso')
              .position('top right')
              .action('OK')
              .hideDelay(6000);
        $mdToast.show(toast);

        delete $scope.turma;

        $scope.turma = {};

        $scope.turmaForm.$setPristine();
        $scope.turmaForm.$setUntouched();
        $scope.turmaForm.$setValidity();

        // Redirecionamento de página.
        $state.transitionTo('turmas', {reload: true, inherit: false, notify: true});

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

app.controller("TurmaController", turmaController);

// Controller disciplina
let disciplinaController = function($scope, $mdToast, $state, disciplinaApi){
    $scope.disciplina = {};

    // Criar uma cópia da disciplina do $scope.
    let disciplina = angular.copy($scope.disciplina);

    $scope.cadastrar = function() {
      disciplinaApi.cadastrar($scope.disciplina)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('A Disciplina foi cadastrada com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.disciplina;

          $scope.disciplina = {};

          $scope.disciplinaForm.$setPristine();
          $scope.disciplinaForm.$setUntouched();
          $scope.disciplinaForm.$setValidity();

          // Redirecionamento de página.
          $state.transitionTo('disciplinas', {reload: true, inherit: false, notify: true});

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

app.controller("DisciplinaController", disciplinaController);

// Controller turno
let turnoController = function($scope, $mdToast, $state, turnoApi) {
    $scope.turno = {};

    // Criar uma cópia do turno do $scope.
    let turno = angular.copy($scope.turno);

    $scope.cadastrar = function() {
      turnoApi.cadastrar($scope.turno)
        .then(function(response) {
          console.log(response)
          let toast = $mdToast.simple()
                .textContent('O Turno foi cadastrado com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.turno;

          $scope.turno = {};

          $scope.turnoForm.$setPristine();
          $scope.turnoForm.$setUntouched();
          $scope.turnoForm.$setValidity();

          // Redirecionamento de página.
          $state.transitionTo('turnos', {reload: true, inherit: false, notify: true});

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

app.controller("TurnoController", turnoController);

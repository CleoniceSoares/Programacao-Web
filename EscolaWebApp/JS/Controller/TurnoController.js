// Controller turno
let turnoController = function($scope, $mdToast, turnoApi) {
    $scope.turno = {};

    $scope.cadastrar = function() {
      turnoApi.cadastrar($scope.turno)
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

app.controller("TurnoController", turnoController);

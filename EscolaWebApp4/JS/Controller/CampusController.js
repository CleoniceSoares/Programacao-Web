// Controller campus
let campusController = function($scope, $mdToast, $state, campusApi) {
    $scope.campus = {};

    // Criar uma cópia do campus do $scope.
    let campus= angular.copy($scope.campus);

    $scope.cadastrar = function() {
      campusApi.cadastrar($scope.campus)
        .then(function(response) {
          console.log(response);
          let toast = $mdToast.simple()
                .textContent('O Campus foi cadastrado com sucesso')
                .position('top right')
                .action('OK')
                .hideDelay(6000);
          $mdToast.show(toast);

          delete $scope.campus;

          $scope.campus = {};

          $scope.campusForm.$setPristine();
          $scope.campusForm.$setUntouched();
          $scope.campusForm.$setValidity();

          // Redirecionamento de página.
          $state.transitionTo('campi', {reload: true, inherit: false, notify: true});

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

app.controller("CampusController", campusController);

// Controller campus
let campusController = function($scope, $mdToast, campusApi) {
    $scope.campus = {};

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

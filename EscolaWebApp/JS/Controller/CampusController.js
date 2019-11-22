// Controller campus
let campusController = function($scope, $mdToast, campusApi) {
    $scope.campus = {};

    $scope.cadastrar = function() {
      campusApi.cadastrar($scope.campus)
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

app.controller("CampusController", campusController);

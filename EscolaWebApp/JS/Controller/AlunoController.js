// Controller aluno
let alunoController = function($scope, $mdToast, alunoApi) {

  $scope.aluno = {};

  $scope.cadastrar = function() {

    let aluno = $scope.aluno;

    // Converter formato da data: brazilian -> american.
    let data = moment(aluno.nascimento, "DD/MM/YYYY");
    aluno.nascimento = data.format("YYYY-MM-DD");

    alunoApi.cadastrar(aluno)
      .then(function(response) {
        let toast = $mdToast.simple()
              .textContent('O aluno foi cadastrado com sucesso')
              .position('top right')
              .action('OK')
              .hideDelay(6000);
        $mdToast.show(toast);

        delete $scope.aluno;

        $scope.aluno = {};

        $scope.alunoForm.$setPristine();
        $scope.alunoForm.$setUntouched();
      })
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

app.controller('AlunoController', alunoController);

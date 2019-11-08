// Inicializar o módulo.
let nomeApp = 'EscolaWebApp'
let modulos = ['ngMaterial', 'ngMessages']
let app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controlador.
// Controller home
let homeController = function($scope) {
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller('HomeController', homeController);

// Controller aluno
let alunoController = function($scope, $mdToast, alunoApi) {

  $scope.aluno = {};
  let aluno = $scope.aluno;

  $scope.cadastrar = function() {
    alunoApi.cadastrar(aluno)
      .then(function(response) {
        console.log("Requisição enviada e recebida com sucesso");
        console.log(response);
      })
      .catch(function(error) {
        let toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados')
                    .position('top right')
                    .action('OK')
                    .hideDelay(6000);
                $mdToast.show(toast);
      });
    /*
    alunoApi.cadastrar($scope.aluno)
      .then(function(response) {})
      .catch(function(error) {});
    */

  }
}

app.controller('AlunoController', alunoController);

// Aluno - Factory
let alunoFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/aluno";

  let _cadastrar = function(aluno) {
    return $http.post(_path, aluno);
  };

  let _atualizar = function(aluno) {
    return $http.put(_path, aluno);
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id));
  };

  let _listar = function() {
    return $http.get(baseUrl + "/alunos");
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("alunoApi", alunoFactory);

// Controller curso
let cursoController = function($scope, $mdToast, cursoApi) {
    $scope.curso = {};

    $scope.cadastrar = function() {
      cursoApi.cadastrar($scope.curso)
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

app.controller("CursoController", cursoController);

// Curso - Factory
let cursoFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/curso";

  let _cadastrar = function(curso) {
    return $http.post(_path, curso)
  };

  let _atualizar = function(curso) {
    return $http.put(_path, curso)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("cursoApi", cursoFactory);

// Controller disciplina
let disciplinaController = function($scope, $mdToast, disciplinaApi){
    $scope.disciplina = {};

    $scope.cadastrar = function() {
      disciplinaApi.cadastrar($scope.disciplina)
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

app.controller("DisciplinaController", disciplinaController);

// Disciplina - Factory
let disciplinaFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/disciplina";

  let _cadastrar = function(disciplina) {
    return $http.post(_path, disciplina)
  };

  let _atualizar = function(disciplina) {
    return $http.put(_path, disciplina)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("disciplinaApi", disciplinaFactory);

// Controller turma
let turmaController = function($scope, $mdToast, turmaApi) {
    $scope.turma = {};

    $scope.cadastrar = function() {
      turmaApi.cadastrar($scope.turma)
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

app.controller("TurmaController", turmaController);

// Turma - Factory
let turmaFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/turma";

  let _cadastrar = function(turma) {
    return $http.post(_path, turma)
  };

  let _atualizar = function(turma) {
    return $http.put(_path, turma)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turmaApi", turmaFactory);

// Controller endereço
let enderecoController = function($scope, $mdToast, enderecoApi) {
    $scope.endereco = {};

    $scope.cadastrar = function() {
      enderecoApi.cadastrar($scope.endereco)
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

app.controller("EnderecoController", enderecoController);

// Endereço - Factory
let enderecoFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/endereco";

  let _cadastrar = function(endereco) {
    return $http.post(_path, endereco)
  };

  let _atualizar = function(endereco) {
    return $http.put(_path, endereco)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("enderecoApi", enderecoFactory);
// Controller escola
let escolaController = function($scope, $mdToast, escolaApi) {
    $scope.escola = {};

    $scope.cadastrar = function() {
      escolaApi.cadastrar($scope.escola)
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

app.controller("EscolaController", escolaController);

// Escola - Factory
let escolaFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/escola";

  let _cadastrar = function(escola) {
    return $http.post(_path, escola)
  };

  let _atualizar = function(escola) {
    return $http.put(_path, escola)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("escolaApi", escolaFactory);

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

// Campus - Factory
let campusFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/campus";

  let _cadastrar = function(campus) {
    return $http.post(_path, campus)
  };

  let _atualizar = function(campus) {
    return $http.put(_path, campus)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("campusApi", campusFactory);

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

// Professor - Factory
let professorFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/professor";

  let _cadastrar = function(professor) {
    return $http.post(_path, professor)
  };

  let _atualizar = function(professor) {
    return $http.put(_path, professor)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("professorApi", professorFactory);

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

// Turno - Factory
let turnoFactory = function($http) {

  let baseUrl = "localhost:5000";
  let _path = baseUrl + "/turno";

  let _cadastrar = function(turno) {
    return $http.post(_path, turno)
  };

  let _atualizar = function(aluno) {
    return $http.put(_path, turno)
  };

  let _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  let _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("turnoApi", turnoFactory);

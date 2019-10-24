// Inicializar o módulo.
let nomeApp = 'EscolaWebApp'
let modulos = []
var app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controlador.
var homeController = function($scope) {
  $scope.nome = "";

  $scope.desejarBoasVindas = function($scope) {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller('HomeController', homeController);

let alunoController = function($scope) {
    $scope.nome = "";
    $scope.matricula = "";
    $scope.cpf = "";
    $scope.nascimento = "";
    $scope.fk_id_endereco = 0;
    $scope.fk_id_curso = 0;

    $scope.cadastrar = function() {
      alunoApi.cadastrar($scope.aluno)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.formAluno.$setPristine();
    }
}

app.controller("AlunoController", alunoController);

// Aluno - Factory
var alunoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/aluno";

  var _cadastrar = function(aluno) {
    return $http.post(_path, aluno)
  };

  var _atualizar = function(aluno) {
    return $http.put(_path, aluno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
    return $http.get(_path)
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("alunoApi", alunoFactory);

let cursoController = function($scope) {
    $scope.nome = "";
    $scope.fk_id_turno = 0;

    $scope.cadastrar = function() {
      cursoApi.cadastrar($scope.curso)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.formCurso.$setPristine();
    }
}

app.controller("CursoController", cursoController);

// Curso - Factory
var cursoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/curso";

  var _cadastrar = function(curso) {
    return $http.post(_path, curso)
  };

  var _atualizar = function(curso) {
    return $http.put(_path, curso)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let disciplinaController = function($scope){
    $scope.nome = "";
    $scope.fk_id_professor = 0;

    $scope.cadastrar = function() {
      disciplinaApi.cadastrar($scope.disciplina)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.disciplinaForm.$setPristine();
    }
}

app.controller("DisciplinaController", disciplinaController);

// Disciplina - Factory
var disciplinaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/disciplina";

  var _cadastrar = function(disciplina) {
    return $http.post(_path, disciplina)
  };

  var _atualizar = function(disciplina) {
    return $http.put(_path, disciplina)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let turmaController = function($scope) {
    $scope.nome = "";
    $scope.fk_id_endereco = 0;

    $scope.cadastrar = function() {
      turmaApi.cadastrar($scope.turma)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.turmaForm.$setPristine();
    }
}

app.controller("TurmaController", turmaController);

// Turma - Factory
var turmaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turma";

  var _cadastrar = function(turma) {
    return $http.post(_path, turma)
  };

  var _atualizar = function(turma) {
    return $http.put(_path, turma)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let enderecoController = function($scope) {
    $scope.logradouro = "";
    $scope.complemento = "";
    $scope.bairro = "";
    $scope.cep = "";
    $scope.numero = 0;

    $scope.cadastrar = function() {
      enderecoApi.cadastrar($scope.endereco)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.enderecoForm.$setPristine();
    }
}

app.controller("EnderecoController", enderecoController);

// Endereço - Factory
var enderecoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/endereco";

  var _cadastrar = function(endereco) {
    return $http.post(_path, endereco)
  };

  var _atualizar = function(endereco) {
    return $http.put(_path, endereco)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let escolaController = function($scope) {
    $scope.nome = "";
    $scope.fk_id_endereco = 0;
    $scope.fk_id_campus = 0;

    $scope.cadastrar = function() {
      escolaApi.cadastrar($scope.escola)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.escolaForm.$setPristine();
    }
}

app.controller("EscolaController", escolaController);

// Escola - Factory
var escolaFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/escola";

  var _cadastrar = function(escola) {
    return $http.post(_path, escola)
  };

  var _atualizar = function(escola) {
    return $http.put(_path, escola)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let campusController = function($scope) {
    $scope.sigla = "";
    $scope.cidade = "";

    $scope.cadastrar = function() {
      campusApi.cadastrar($scope.campus)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.ampusForm.$setPristine();
    }
}

app.controller("CampusController", campusController);

// Campus - Factory
var campusFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/campus";

  var _cadastrar = function(campus) {
    return $http.post(_path, campus)
  };

  var _atualizar = function(campus) {
    return $http.put(_path, campus)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let professorController = function($scope) {
    $scope.nome = "";
    $scope.fk_id_endereco = 0;

    $scope.cadastrar = function() {
      professorApi.cadastrar($scope.professor)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.professorForm.$setPristine();
    }
}

app.controller("ProfessorController", professorController);

// Professor - Factory
var professorFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/professor";

  var _cadastrar = function(professor) {
    return $http.post(_path, professor)
  };

  var _atualizar = function(professor) {
    return $http.put(_path, professor)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

let turnoController = function($scope) {
    $scope.nome = "";

    $scope.cadastrar = function() {
      turnoApi.cadastrar($scope.turno)
        .then(function(response) {})
        .catch(function(error) {});
      $scope.turnoForm.$setPristine();
    }
}

app.controller("TurnoController", turnoController);

// Turno - Factory
var turnoFactory = function($http) {

  var baseUrl = "localhost:5000";
  var path = baseUrl + "/turno";

  var _cadastrar = function(turno) {
    return $http.post(_path, turno)
  };

  var _atualizar = function(aluno) {
    return $http.put(_path, turno)
  };

  var _buscarPorId = function(id) {
    return $http.get(_path + "/" + encodeURI(id))
  };

  var _listar = function() {
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

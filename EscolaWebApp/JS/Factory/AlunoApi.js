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

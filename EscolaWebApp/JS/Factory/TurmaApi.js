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

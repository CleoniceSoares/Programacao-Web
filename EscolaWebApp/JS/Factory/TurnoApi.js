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

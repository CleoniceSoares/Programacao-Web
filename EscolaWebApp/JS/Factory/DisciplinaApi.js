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

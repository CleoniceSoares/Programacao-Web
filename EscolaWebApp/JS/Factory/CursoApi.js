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

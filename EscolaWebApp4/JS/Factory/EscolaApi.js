// Escola - Factory
let escolaFactory = function($http) {

  let baseUrl = "http://127.0.0.1:5000";
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
    return $http.get(baseUrl + "/escolas")
  };

  return {
    cadastrar: _cadastrar,
    atualizar: _atualizar,
    buscarPorId: _buscarPorId,
    listar: _listar
  };
}

app.factory("escolaApi", escolaFactory);

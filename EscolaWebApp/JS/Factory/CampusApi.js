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

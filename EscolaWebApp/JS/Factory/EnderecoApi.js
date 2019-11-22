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

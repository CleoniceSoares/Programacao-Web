app.config(function ($routeProvider, $locationProvider) {

    // Remover a exclamação (!) da URL
    var SEM_PREFIXO = '';
    $locationProvider.hashPrefix(SEM_PREFIXO);

    // Utilizando o HTML5 History API
    //$locationProvider.html5Mode(true);

    // Atualizar os módulos passados no app.js adicionando o 'ui.router'.
    // Mover todas as rotas já definidas no router.js para o arquivo state.js.
    // Verificar o modelo utilizado para o $stateProvider presente no state.js que é diferente.
    // Não esquecer de importar no index o script state.js .
    // Mudar no index.html o atributo ng-view para o ui-view.
    $routeProvider
      .when('/', {
        templateUrl : 'home.html',
        controller  : 'HomeController'
      })
      .when('/aluno', {
        templateUrl : 'form_aluno.html',
        controller  : 'AlunoController'
      })
      .when('/campus', {
        templateUrl : 'form_campus.html',
        controller  : 'CampusController'
      })
      .when('/curso', {
        templateUrl : 'form_curso.html',
        controller  : 'CursoController'
      })
      .when('/disciplina', {
        templateUrl : 'form_disciplina.html',
        controller  : 'DisciplinaController'
      })
      .when('/endereco', {
        templateUrl : 'form_endereco.html',
        controller  : 'EnderecoController'
      })
      .when('/escola', {
        templateUrl : 'form_escola.html',
        controller  : 'EscolaController'
      })
      .when('/professor', {
        templateUrl : 'form_professor.html',
        controller  : 'ProfessorController'
      })
      .when('/turma', {
        templateUrl : 'form_turma.html',
        controller  : 'TurmaController'
      })
      .when('/turno', {
        templateUrl : 'form_turno.html',
        controller  : 'TurnoController'
      })
    .otherwise({redirectTo: '/'});
});

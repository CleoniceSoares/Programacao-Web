/**
 * Configuração da rota com ui-router.
 */
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Rota padrão.
    $urlRouterProvider.otherwise("/home");

    // Estados
    $stateProvider
      // Home
      .state('home', {
        url: '/home',
        title: 'EscolaApp - Página Principal',
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      // aluno
      .state('aluno', {
        url: '/aluno',
        title: 'EscolaApp - Cadastrar Aluno',
        templateUrl: 'form_aluno.html',
        controller: 'AlunoController'
      })
      // campus
      .state('campus', {
        url: '/campus',
        title: 'EscolaApp - Cadastrar Campus',
        templateUrl : 'form_campus.html',
        controller  : 'CampusController'
      })
      // curso
      .state('curso', {
        url: '/curso',
        title: 'EscolaApp - Cadastrar Curso',
        templateUrl : 'form_curso.html',
        controller  : 'CursoController'
      })
      // disciplina
      .state('disciplina', {
        url: '/disciplina',
        title: 'EscolaApp - Cadastrar Disciplina',
        templateUrl : 'form_disciplina.html',
        controller  : 'DisciplinaController'
      })
      // endereço
      .state('endereco', {
        url: '/endereco',
        title: 'EscolaApp - Cadastrar Endereço',
        templateUrl : 'form_endereco.html',
        controller  : 'EnderecoController'
      })
      // escola
      .state('escola', {
        url: '/escola',
        title: 'EscolaApp - Cadastrar Escola',
        templateUrl : 'form_escola.html',
        controller  : 'EscolaController'
      })
      // professor
      .state('professor', {
        url: '/professor',
        title: 'EscolaApp - Cadastrar Professor',
        templateUrl : 'form_professor.html',
        controller  : 'ProfessorController'
      })
      // turma
      .state('turma', {
        url: '/turma',
        title: 'EscolaApp - Cadastrar Turma',
        templateUrl : 'form_turma.html',
        controller  : 'TurmaController'
      })
      // turno
      .state('turno', {
        url: '/turno',
        title: 'EscolaApp - Cadastrar Turno',
        templateUrl : 'form_turno.html',
        controller  : 'TurnoController'
      })
      // listar alunos
      .state('alunos', {
        url: '/alunos',
        title: 'EscolaApp - Listar Alunos',
        templateUrl: 'listar_alunos.html',
        controller: 'LtAlunosController'
      });
  })
  //take all whitespace out of string
  .filter('nospace', function() {
    return function(value) {
      return (!value) ? '' : value.replace(/ /g, '');
    };
  })
  //replace uppercase to regular case
  .filter('humanizeDoc', function() {
    return function(doc) {
      if (!doc) return;
      if (doc.type === 'directive') {
        return doc.name.replace(/([A-Z])/g, function($1) {
          return '-' + $1.toLowerCase();
        });
      }

      return doc.label || doc.name;
    }
  });

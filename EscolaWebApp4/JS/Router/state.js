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
      })
      .state('campi', {
        url: '/campi',
        title: 'EscolaApp - Listar campi',
        templateUrl: 'listar_campi.html',
        controller: 'LtCampiController'
      })
      // listar cursos
      .state('cursos', {
        url: '/cursos',
        title: 'EscolaApp - Listar Cursos',
        templateUrl: 'listar_cursos.html',
        controller: 'LtCursosController'
      })
      // listar disciplinas
      .state('disciplinas', {
        url: '/disciplinas',
        title: 'EscolaApp - Listar Disciplinas',
        templateUrl: 'listar_disciplinas.html',
        controller: 'LtDisciplinasController'
      })
      // listar endereços
      .state('enderecos', {
        url: '/enderecos',
        title: 'EscolaApp - Listar Enderecos',
        templateUrl: 'listar_enderecos.html',
        controller: 'LtEnderecosController'
      })
      // listar escolas
      .state('escolas', {
        url: '/escolas',
        title: 'EscolaApp - Listar Escolas',
        templateUrl: 'listar_escolas.html',
        controller: 'LtEscolasController'
      })
      // listar professores
      .state('professores', {
        url: '/professores',
        title: 'EscolaApp - Listar Professores',
        templateUrl: 'listar_professores.html',
        controller: 'LtProfessoresController'
      })
      // listar turmas
      .state('turmas', {
        url: '/turmas',
        title: 'EscolaApp - Listar Turmas',
        templateUrl: 'listar_turmas.html',
        controller: 'LtTurmasController'
      })
      // listar turnos
      .state('turnos', {
        url: '/turnos',
        title: 'EscolaApp - Listar Turnos',
        templateUrl: 'listar_turnos.html',
        controller: 'LtTurnosController'
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

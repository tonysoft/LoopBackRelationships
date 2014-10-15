'use strict';

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('students', {
        url: '/students',
        templateUrl: 'templates/students.html',
        controller: 'StudentsCtrl'
      })
      .state('student', {
        url: '/student/:id',
        templateUrl: 'templates/student.html',
        controller: 'StudentCtrl'
      })
      .state('class', {
        url: '/class/:id',
        templateUrl: 'templates/class.html',
        controller: 'ClassCtrl'
      })
      .state('teacher', {
        url: '/teacher/:id',
        templateUrl: 'templates/teacher.html',
        controller: 'TeacherCtrl'
      });
    $urlRouterProvider.otherwise('/students');
  }]);

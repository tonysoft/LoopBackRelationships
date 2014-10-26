'use strict';

angular
  .module('app')


  .controller('StudentsCtrl', ['$scope', '$state', 'Student', function($scope, $state,
      Student) {
    $scope.students = [];
    function getStudents() {
      var filter =  { "filter":
                      {
                        "include":  { "relation": "classes", 
                                      "scope":  { 
                                                  "include": ["teachers","students"]
                                                }
                                    }
                      }
                    };

      Student                         // access the Student Model Resource
        .find(filter)                 // call the "find" method
        .$promise                      
        .then(function(results) {
          $scope.students = results;  // and store the results
        });
    }
    getStudents();

  }])


  .controller('TeacherCtrl', ['$scope', '$state', 'Teacher', function($scope, $state,
      Teacher) {
    $scope.teacher = {};
    function getTeacher() {
      Teacher
        .find({"filter":
                  {
                    "where": {"id": $state.params.id},
                    "include": {"relation": "classes", "scope": {"include": ["students"]}}
                  }})
        .$promise
        .then(function(results) {
          $scope.teacher = results[0];
        });
    }
    getTeacher();

  }])


  .controller('StudentCtrl', ['$scope', '$state', 'Student', function($scope, $state,
      Student) {
    $scope.student = {};
    function getStudent() {
      Student
        .find({"filter":
                  {
                    "where": {"id": $state.params.id},
                    "include": {"relation": "classes", "scope": {"include": ["teachers","students"]}}
                  }})
        .$promise
        .then(function(results) {
          $scope.student = results[0];
        });
    }
    getStudent();

  }])


  .controller('ClassCtrl', ['$scope', '$state', 'Class', function($scope, $state,
      Class) {
    $scope.class = {};
    function getClass() {
      Class
        .find({"filter":
                  {
                    "where": {"id": $state.params.id},
                    "include": ["teachers","students"]
                  }})
        .$promise
        .then(function(results) {
          $scope.class = results[0];
        });
    }
    getClass();

  }])
  ;

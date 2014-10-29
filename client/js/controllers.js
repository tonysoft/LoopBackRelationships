'use strict';

angular
  .module('app')


  .controller
      ('StudentsCtrl', ['$scope', '$state', 'Student', function($scope, $state,
          Student) {
        $scope.students = [];
        function getStudents() {          // Define a helper function  
          var filter =  
                { "filter":
                  {
                    "include":  { "relation": "classes", 
                                  "scope":  { 
                                              "include": ["teachers",
                                                          "students"]
                                            }
                                }
                  }
                };
      
          Student                         // access the Student Model Resource
            .find(filter)                 // call the "find" method with a "filter"
            .$promise                      
            .then(function(results) {
              $scope.students = results;  // and store the results
              console.log(JSON.stringify(results));
            });
        }
        
        getStudents();                    // When the Controller is loaded
      
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


  .controller('StudentCtrl', ['$scope', '$state', 'Student', "Appointment", function($scope, $state,
      Student, Appointment) {
    $scope.student = {};
    var studentId = parseInt($state.params.id);
    function getStudent() {
      Student
        .find({"filter":
                  {
                    "where": {"id": studentId},
                    "include": {"relation": "classes", "scope": {"include": ["teachers","students"]}}
                  }})
        .$promise
        .then(function(students) {
          $scope.student = students[0];
          return Appointment.find({"filter":
                                    {"where": { "studentId": studentId}, 
                                      "include" : "teachers" }
                                  }).$promise
        })
        .then(function(appointments) {
          $scope.student.appointments = appointments;
        });
    }
    getStudent();

    $scope.formatDate = function(dateTime) {
      var d = new Date(dateTime);
      return "on: " + d.toLocaleDateString() + " at: " + d.toLocaleTimeString();
    }

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

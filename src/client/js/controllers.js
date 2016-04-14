app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService){

		studentDataService.getAllStudents()
			.then(function(students){
					$scope.allStudents = students.data.data;
					console.log($scope.allStudents);
			});

		$scope.addStudent = function(){
			studentDataService.addStudent($scope.student);
			$scope.student = {};
		};

			

}]);
var app = angular.module('App', []);

app.controller('myController', ['$scope', function($scope){
	$scope.greeting = 'Angular!';
}]);
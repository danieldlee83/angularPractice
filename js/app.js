var app = angular.module('myApp',[]);

app.controller('myController', ['$scope', function ($scope){

	$scope.text = 'Hello, Angular!';
	$scope.message = "This is Angular!";
	$scope.user = {};
	$scope.user.details = {
		"username": "Daniel",
		"id": "1234567",
		"address": "1234 main st. slc, ut 84106"
	};
}]);


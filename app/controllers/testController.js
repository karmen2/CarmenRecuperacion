app.controller("testController", function($scope) {
	$scope.saludo = function() {
		console.log("Hola " + $scope.nombre);
	}
	$scope.personas =[
    {
        "last_name": "Apaza",
        "first_name": "Juan",
    },
    {
        "last_name": "Sullon",
        "first_name": "Angel",
    },
    {
        "last_name": "Sucapuca",
        "first_name": "Miguel",
    }
	]
});
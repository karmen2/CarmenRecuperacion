app.controller("cursoController", function($scope, cursoService, $window) {

    $scope.cr_list = [];

    list = function() {
        cursoService.list().then(function(r) {
            $scope.cr_list = r.data;
        }, function(error) {
            console.log("Error  " + error.data.message);
        })

    }
    list();

    $scope.sel = function(d) {
        $scope.curso = d;
    };

    $scope.save = function() {
        if ($scope.curso.id) {
            cursoService.update({ id: "" }, $scope.curso).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        } else {
            cursoService.create($scope.curso).then(function(r) {
                console.log(r.data);
                list();
            }, function(error) {
                console.log("Error  " + error.data.message);
            });
        };
    };
    $scope.delete = function(d){
        if ($window.confirm('Confirm delete')) {
            cursoService.delete({ "id": d.id }).then(function (r) {
                console.log(r.data);
                list();
            }, function (error) {
                console.log(error.data.message);
            });
        };
    };

});
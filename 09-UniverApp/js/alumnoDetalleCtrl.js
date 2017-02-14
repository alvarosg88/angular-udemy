app.controller('alumnoDetalleCtrl', ['$scope','$http', '$routeParams',function($scope, $http, $routeParams){
    
    $scope.setActive("mAlumnos");
  
    var codigo = $routeParams.codigo;
    $scope.alumno = {};
    $scope.showSuccess = false;
    $scope.showDanger = false;
    $scope.nuevoAlumno = false;

    if ( codigo != 'nuevo' ){

        $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo ).success(function(data){
            console.log(data)
              if ( data.err ){
                  window.location.replace('#/alumnos')
                  return;
              }else{
                  $scope.alumno = data;
              }
        });

    }else{

        $scope.nuevoAlumno = true;

    }



    $scope.guardarAlumno = function(){

        if ( !$scope.nuevoAlumno ){

            $http.post('php/servicios/alumnos.guardar.php',$scope.alumno).success(function(data){

                updateStudent(data);

            });

        }else{

            $http.post('php/servicios/alumnos.crear.php',$scope.alumno).success(function(data){

                updateStudent(data);

            });

        }



    }

    function updateStudent(data){
        if( data.err ){

                $scope.showDanger = true;
                setTimeout(function(){
                    $scope.showDanger = false;
                    $scope.$apply();
                },4000)
                console.log(data)

            }else{

                $scope.showSuccess = true;
                setTimeout(function(){
                    $scope.showSuccess = false;
                    $scope.$apply();
                },4000)
                console.log(data)

            }
    }

}]);

/*app.filter('phone',function(){
  return function(num){
    return num.substr(0,4)+'-'+num.substr(4);
  }
})*/

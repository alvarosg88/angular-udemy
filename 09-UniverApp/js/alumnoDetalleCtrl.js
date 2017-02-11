app.controller('alumnoDetalleCtrl', ['$scope','$http', '$routeParams',function($scope, $http, $routeParams){
  
    var codigo = $routeParams.codigo;
    $scope.alumno = {};
    $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo ).success(function(data){
    console.log(data)
      if ( data.err ){
          window.location.replace('#/alumnos')
          return;
      }else{
          $scope.alumno = data;  
      }   
    });

}]);

/*app.filter('phone',function(){
  return function(num){
    return num.substr(0,4)+'-'+num.substr(4);
  }
})*/
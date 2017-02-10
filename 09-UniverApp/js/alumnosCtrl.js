app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");
    $scope.alumnos = {};
    $scope.position = 5;
  
    $http.get('php/servicios/alumnos.listado.php').success(function(data){
      
      $scope.alumnos = data;
      
    });
  
    $scope.goNext = function(){
      if( $scope.alumnos.length > $scope.position ){
        $scope.position += 5;
        document.getElementById('btn-prev').className = "btn btn-primary";
        document.getElementById('btn-next').className = "btn btn-primary";
      }
      else{
        document.getElementById('btn-next').className = "btn btn-default";
      }
    }
    
    $scope.goPrev = function(){
      if( $scope.position > 5 ){
        $scope.position -= 5;
        document.getElementById('btn-prev').className = "btn btn-primary";
        document.getElementById('btn-next').className = "btn btn-primary";
      }
      else{
        document.getElementById('btn-prev').className = "btn btn-default";
      }
    }

}]);

app.filter('phone',function(){
  return function(num){
    return num.substr(0,4)+'-'+num.substr(4);
  }
})
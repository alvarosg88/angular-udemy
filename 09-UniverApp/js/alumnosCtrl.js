app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");
    $scope.alumnos = {};
    $scope.position = 5;
  
    $http.get('php/servicios/alumnos.listado.php').success(function(data){
      
      $scope.alumnos = data;
      
    });
    
    function setPrimary(button){
        button.className = "btn btn-primary";
    }
    
    var myButtons = [
        document.getElementById('btn-next'),
        document.getElementById('btn-prev')
    ];
  
    $scope.goNext = function(){
      if( $scope.alumnos.length > $scope.position ){
        $scope.position += 5;
        myButtons.forEach(setPrimary)
      }
      else{
        myButtons[0].className = "btn btn-default";
      }
    }
    
    $scope.goPrev = function(){
      if( $scope.position > 5 ){
        $scope.position -= 5;
        myButtons.forEach(setPrimary)
      }
      else{
        myButtons[1].className = "btn btn-default";
      }
    }

}]);

app.filter('phone',function(){
  return function(num){
    return num.substr(0,4)+'-'+num.substr(4);
  }
})
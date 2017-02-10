var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";
  
  $scope.setActive = function(option){
    
      $scope.mInicio     = '';
      $scope.mProfesores = '';
      $scope.mAlumnos    = '';
    
      $scope[option]     = 'active';
  }

}]);

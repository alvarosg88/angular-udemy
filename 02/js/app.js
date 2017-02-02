var app = angular.module('universidadApp', [ ]);

app.controller('profesorCtrl', function($scope){
  
  $scope.profesor = profesorData;
  $scope.editando = {};
  $scope.mostrarCaja = false;
  
  $scope.EditarProfesor = function(){
    angular.copy( $scope.profesor, $scope.editando );
    $scope.mostrarCaja = true;
  }
  $scope.GuardarProfesor = function(){
    angular.copy( $scope.editando, $scope.profesor );
    $scope.mostrarCaja = false;
  }
  $scope.CancelarCambios = function(){
    $scope.editando = {};
    $scope.mostrarCaja = false;
  }
})

var profesorData = {
  nombre: "Yoda",
  bio:    "Tiene más años que ajú",
  edad:   900,
  foto:   "https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/yoda-eyes-closed-much-pain-there-is-master-yoda-s-secret-star-wars-origin-jpeg-291171.jpg"
}
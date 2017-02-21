var app = angular.module('promesasApp.servicios', []);

app.factory('Personas', ['$http', '$q', '$rootScope', function($http,$q,$rootScope){
	
  var self = {
    "mensaje"   :   "",
    "cargando"  :   false,
    "data"      :   []
  };
  
  self.cargarData = function(){
    
    self.cargando = true;
    var q = $q.defer();
    
    setTimeout(function(){
      
      $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=699c0d692871063f0f0b9ea2ecfe1081')
      .then(function( res ) {

          q.resolve( res.data )

      })
      .catch(function( res ) {

          q.reject( res.statusText )

      })
      .finally(function() {
          console.log('Ya he terminado')
      });
      
    },1000)
    
    
    return q.promise;
    
  }
  
  $rootScope.promise = self.cargarData();
  $rootScope.promise.then(
      function( data ){
        self.cargando = false;
        self.mensaje = "Datos cargados con éxito";
        self.data = data;
      },
      function( error ){
        self.cargando = false;
        self.mensaje = "Ocurrió un error al cargar los datos";
        console.error( error );
      }
  );
  
  return self;
  
}]);
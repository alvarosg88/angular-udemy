(function(){

var app = angular.module('ejemplosApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.geo = {};
  $http.get('http://api.openweathermap.org/data/2.5/weather?q=Cordoba,es&appid=????????').success(function(data){
      $scope.geo = data;
      console.log(data)
  })

  $scope.toCls = function(k){
      return Math.round( (k - 273,15) * 100 ) / 100;
  }
}]);

// Creo filtro propio para mostrar correctamente valores con caracteres Unicode
app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

})();

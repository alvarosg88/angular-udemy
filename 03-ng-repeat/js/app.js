(function(){
  
  var app = angular.module('universidadApp', [ ]);
  
  app.controller('listadoCtrl', [ '$scope', function($scope){
    
    $scope.listado = ["Jason","Billy","Zack","Trini","Kimberly","Tommy"];
    
    $scope.listadoRangers = {
      rangers: [{
        sex:      "hombre",
        id:       0,
        name:     "Jason",
        color:    "red",
        zord:     "Tyrannosaurus",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12940258_1583492275297648_814821335_n.jpg?ig_cache_key=MTIxODc4MDY1NjMxOTAwMjg3Mw%3D%3D.2"
      },
      {
        sex:      "hombre",
        id:       1,
        name:     "Billy",
        color:    "blue",
        zord:     "Triceratops",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12918508_1584735518510148_1594966315_n.jpg?ig_cache_key=MTIxODc5MjM2NzM3NzgwNzg5Nw%3D%3D.2"
      },
      {
        sex:      "hombre",
        id:       2,
        name:     "Zack",
        color:    "black",
        zord:     "Mammoth",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.0.768.768/12599264_923146994450229_939817274_n.jpg?ig_cache_key=MTE4NDIwNTAxNjE3Nzc2ODg3Ng%3D%3D.2.c"
      },
      {
        sex:      "mujer",
        id:       3,
        name:     "Trini",
        color:    "yellow",
        zord:     "Saber-toothed Tiger",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12912559_1692536897687713_1658205268_n.jpg?ig_cache_key=MTIxODg1MjI5MzI2MTMyNjUwMQ%3D%3D.2"
      },
      {
        sex:      "mujer",
        id:       4,
        name:     "Kimberly",
        color:    "pink",
        zord:     "Pterodactyl",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/14693905_637986943050154_5776474491903279104_n.jpg?ig_cache_key=MTM2NTQ1MDg5MzgwNjIzMTQ1NQ%3D%3D.2"
      },
      {
        sex:      "hombre",
        id:       5,
        name:     "Tommy",
        color:    "green",
        zord:     "Dragonzord",
        avatar:   "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12912382_553687828137674_630336143_n.jpg?ig_cache_key=MTIxNDAxMTk3Nzc4NjEyODQzNg%3D%3D.2"
      }]
    }
  
                                 
  }]);
  
})();
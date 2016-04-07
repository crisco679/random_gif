var app = angular.module('angularApp', []);


app.controller('NewController',function($scope,$http){

    $scope.gif = {};
    $scope.buttonClicked = false;
    
$scope.randomGif = function(){
  $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
    $scope.buttonClicked = true;
    console.log(response);
    $scope.gif = response.data.data;



  });


  }

});


  // $("button").on("click",function(){
  //   $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
  //
  //     var randomGif = response.data;
  //     console.log(response);
  //     console.log(randomGif.image_url);
  //     $(".gif").html("<img src =" + randomGif.image_url + ">");
  //   });
  // });

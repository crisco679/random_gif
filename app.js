$(function(){


  $("button").on("click",function(){
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){

      var randomGif = response.data;
      console.log(response);
      console.log(randomGif.image_url);
      $(".gif").html("<img src =" + randomGif.image_url + ">");
    });
  });




});

$(document).ready(function(){

// Event listener for the buttons
    $("button").on("click", function() {
      console.log("Button Clicked")

   var x = $(this).data("search");
    console.log("x");   

      // Storing our giphy API URL for a random programming image

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        x + "&api_key=dc6zaTOxFJmzC&limit=10";
          console.log(queryURL);

  $.ajax({url:queryURL, method: "GET"})
    .done(function(response){
      console.log(response);

   for (var i = 0; i < response.data.length; i++) {   
      $("#GIFArea").prepend("<p>Rating: " + response.data[i].rating + "</p>");
      $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized.url + "'>");

        $("#GIFArea").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
      } else {
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
      }
    });
    };
     });
   });
  });
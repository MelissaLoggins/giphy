$(document).ready(function(){

// Array of jerks.
var jerks = ['Martin Shkreli', 'Kellyanne Conway', 'Ryan Lochte', 'Clowns', 'Alex Jones', 'Debbie Wasserman Schultz', 'Pat McCrory', 'Anthony Weiner', 'Rodrigo Duterte', 'Mitch McConnell', 'Vladimir Putin', 'Donald J. Trump', 'Julian Assange', 'The Reaper'];

// It's time to make the buttons.
function produceButtons(){
  for (var i = 0; i < jerks.length; i++) {
      var b = $('<button .btn-info>');
      b.addClass('jerk');
      b.attr('data-name', jerks[i]);
      b.text(jerks[i]);
      b.attr('data-state', $(this).attr('data-state', 'animate'));
      $('#theButtons').append(b);
    }
  }
$('#addJerk').on('click', function(){
    var jerk = $('jerk-input').val();
    jerks.push(jerk);
    produceButtons();
    return false;

});
produceButtons();

// Event listener for the buttons
    // $("button").on("click", function() {
      // console.log("Button Clicked")
 $(document).on('click', '.jerk', function(){
  var jerk = $(this).data('name');
  console.log(jerk);
 })     

   // var x = $(this).data("search");
   //  console.log("x");   

      // Storing our giphy API URL for a random programming image

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + jerk + "&api_key=dc6zaTOxFJmzC&limit=10";
          console.log(queryURL);

  $.ajax({url:queryURL, method: "GET"})
    .done(function(response){
      console.log(response);

      var results = response.data;
      $("#GIFArea").empty();  

   for (var i = 0; i < results.length; i++) { 
      var jerkDiv = $('<div id="jerkDiv">');
      var p = $('<p>').text("Rating: " + results[i].rating);
      var jerkImage = $('<img>');
      jerkImage.attr('src', results[i].images.fixed_height_still.url);
      jerkImage.attr('data-still', results[i].images.fixed_height_still.url);
      jerkImage.attr('data-animate', results[i].images.fixed_height.url);
      jerkImage.attr('class', 'jerkImage');
      jerkImage.attr('data-state', 'still');
      jerkDiv.append(p);
      jerkDiv.append(jerkImage);
      $('GIFArea').append(jerkDiv);

    }
  });

      // $("#GIFArea").prepend("<p>Rating: " + response.data[i].rating + "</p>");
      // $("#GIFArea").prepend("<img src='" + response.data[i].images.downsized.url + "'>");

      //   $("#GIFArea").on("click", function() {

          // Found this nifty snippet of code and thought it might help. It could be a waste of time, but I may as well try.
      // $(".btn-info").freezeframe();

  $(document).on('click', '.jerkImage', function(){
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");

      if (state === 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
      } else {
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
      }
    });
  });
  
   
  
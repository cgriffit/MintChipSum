$(document).ready(function() {
  //create an array of strings associated with ice cream

  //on enter keypress
  $("input[type='number']").keypress(function(event) {
    if(event.which === 13) {
      //generate specified number of paragraphs of lorem ipsum

      //display lorem ipsum
    }
  });

  //on button press
  $("button").on("click", function() {
    //remove lorem ipsum - should this be remove, hide, or clear?

    //clear number
      $("#numParagraphs").val("");
  });

});

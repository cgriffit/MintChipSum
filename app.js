$(document).ready(function() {
  //create an array of strings associated with ice cream
  let icStrings = ["mint chip", "soft serve", "cookie dough", "waffle cone", "strawberry",
  "banana split", "gelato", "a la mode", "Ben & Jerry's", "Dairy Queen", "sundae",
  "cookies and cream", "rocky road", "peanut butter cup", "pralines and cream", "vanilla",
  "chocolate", "super fudge brownie", "bunny tracks", "salted caramel"];

  //on enter keypress
  $("input[type='number']").keypress(function(event) {
    if(event.which === 13) {
      let numOfParagraphs = $("#numParagraphs").val();

      //generate specified number of paragraphs of lorem ipsum
      for (let i = 0; i < numOfParagraphs; i++) {
        let myIpsum = "";
        for (let j = 0; j < Math.floor((Math.random() * 100) + 10); j++) {
          myIpsum += icStrings[ Math.floor(Math.random() * icStrings.length)] + " ";
        }

        //display lorem ipsum
        $("#loremIpsum").append("<p>" + myIpsum + "</p>");
      }

      //display button for new lorem ipsum
      $("button").removeClass("hide");
      
      //stop form from submitting
      event.preventDefault();
    }
  });

  //on button press
  $("button").on("click", function() {
    //remove lorem ipsum - should this be remove, hide, or clear?
    $("#loremIpsum").html("");
    //clear number
    $("#numParagraphs").val("").focus();
    //hide button for new lorem ipsum
    $("button").addClass("hide");
  });

});

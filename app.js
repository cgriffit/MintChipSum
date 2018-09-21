$(document).ready(function() {
  //canvas setup
  let canvas = document.querySelector("#dottedBackground");
  //check if browser supports canvas element
  if (canvas.getContext) {
    let cntxt = canvas.getContext("2d");
    //add polka dots
    for (let x = 25; x <= canvas.width; x += 100) {
      for (let y = 25; y <= canvas.height; y += 75) {
          let radius = 15;
          let startAngle = 0;
          let endAngle = 360; //?
          //draw circle
          cntxt.beginPath();
          cntxt.arc(x,y,radius,startAngle,endAngle);
          cntxt.fill();
      }
    }
    //set background to dots and mint green color
    document.body.style.backgroundImage = "url(" + canvas.toDataURL() + ")";
    document.body.style.backgroundColor = "#A4FFDE";

  } else {
    //behavior if browser does not support canvas element
    document.body.style.backgroundColor = "#A4FFDE";
  }

  //create an array of strings associated with ice cream
  let icStrings = ["mint chip", "soft serve", "cookie dough", "waffle cone", "strawberry",
  "banana split", "gelato", "a la mode", "Ben & Jerry's", "Dairy Queen", "sundae",
  "cookies and cream", "rocky road", "peanut butter cup", "frozen yogurt", "pralines and cream", "vanilla",
  "chocolate", "super fudge brownie", "bunny tracks", "salted caramel", "hot fudge",
  "sprinkles", "birthday cake"];

  //on enter keypress
  $("input[type='number']").keypress(function(event) {
    if(event.which === 13) {
      let numOfParagraphs = $("#numParagraphs").val();

      //generate specified number of paragraphs of lorem ipsum
      for (let i = 0; i < numOfParagraphs; i++) {
        let myIpsum = "";
        for (let j = 0; j < Math.floor((Math.random() * 100) + 40); j++) {
          let randomWord = icStrings[ Math.floor(Math.random() * icStrings.length)];
          //capitalize first letter of paragraph
          if (j === 0) {
            myIpsum = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
          }
          //create new sentence after 10 strings
          else if (j % 10 === 0) {
            //break paragraph after four sentenceså
            if (j === 40) {
              break;
            }
            myIpsum += ". "  + randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
          //add random string
          } else {
              myIpsum += " " + randomWord;
          }

        }
        //display lorem ipsum and styles
        $("#loremIpsum").append("<p>" + myIpsum + ".</p>");
        $("#loremIpsum").removeClass("hide");
      }

      //display button for new lorem ipsum and give it focus
      $("button").removeClass("hide").focus();
      //stop form from submitting
      event.preventDefault();
    }
  });

  //on button press
  $("button").on("click", function() {
    //clear out listed lorem ipsum
    $("#loremIpsum").empty();
    //hide lorem ipsum styling
    $("#loremIpsum").addClass("hide");
    //clear listed number and give field focus
    $("#numParagraphs").val("").focus();
    //hide button for new lorem ipsum
    $("button").addClass("hide");
  });

});

$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 
  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('You clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  
    });

});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  if (userName.length === 0) {
    coolFacts += " <br> " + "Invalid Input: Please enter a name";
  }
  else {
    coolFacts = nameLength(userName);
    coolFacts += " <br> " + nameStart(userName);
    coolFacts += " <br> " + getSpiritAnimal(userName);
  }

  console.log("initialized the coolFacts variable: " + coolFacts); 

  return coolFacts;
}


function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is " + name[0];
}

//if then statment
function getSpiritAnimal(name) {
  if (name.length < 5) {
    return "Wow, " + name + ", your spirit animal is a dog!";
  } 
  else {
    return "Holy cow, " + name + ", your spirit animal is a cow!";
    }
  
 }

function refreshPage(){
  $("#coolNameFactsOutput").html("");
  var getValue = document.getElementById("userName");
    if (getValue.value !="") {
      getValue.value = "";
    }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  generatePassword();
});

/*function writePassword(event) { 
  /*var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};*/

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*(){}[]=<>/.,";

function generatePassword () {
  var chosenLength = window.prompt("Choose a length of password (8~128 characters):")
  //limit choices to valid number choices 
  if (chosenLength<8 || chosenLength>128){
    alert("Please choose a password length of 8 to 128");
    return; 
  } /*else if (typeof chosenLength !== "number"){
    alert("Please enter a number (ex: 10)"); 
    return;
  }*/
  //user choices
  var chosenUpper = window.confirm("Would you like to use uppercase letters?");
  var chosenLower = window.confirm("Would you like to use lowercase letters?");
  var chosenNumber = window.confirm("Would you like to use numbers?");
  var chosenSpecial = window.confirm("Would you like to use special characters?");
  var newPassword = '';

  if (chosenUpper === true && chosenLower === true && chosenNumber === true && chosenSpecial === true) {
    //all yes 
    var characters = upper.concat(lower, numbers, special);
    for (var i = 0; i < chosenLength; i++){
      var random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword;
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber === true && chosenSpecial === true) {
    //lower, number, special
    characters = lower.concat(numbers, special);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper === true && chosenLower === true && chosenNumber === true && chosenSpecial !== true) {
    //Upper, lower, number 
    characters = upper.concat(lower, numbers);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber === true && chosenSpecial === true) {
    //upper, number, special 
    characters = upper.concat(numbers, special);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword;
  } else if (chosenUpper === true && chosenLower === true && chosenNumber !== true && chosenSpecial === true){
    //upper, lower, special 
    characters = upper.concat(lower, special); 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword;
  } else if (chosenUpper === true && chosenLower === true && chosenNumber !== true && chosenSpecial !== true){
    //upper lower - 
    characters = upper.concat(lower);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber !== true && chosenSpecial === true){
    //upper special - 
    characters = upper.concat(special);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword;
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber === true && chosenSpecial !== true){
    //upper number - 
    characters = upper.concat(numbers); 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber === true && chosenSpecial !== true){
    //lower, number - 
    characters = lower.concat(numbers);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber !== true && chosenSpecial === true){
    //lower, special - 
    characters = lower.concat(special);
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber === true && chosenSpecial === true){
    //number, special - 
    characters = numbers.concat(special); 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*characters.length);
      newPassword += characters.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber !== true && chosenSpecial === true){
    //just special - 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*special.length);
      newPassword += special.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber === true && chosenSpecial !== true){
    //just numbers - 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*numbers.length);
      newPassword += numbers.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber !== true && chosenSpecial !== true){
    //just upepercase - 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*upper.length);
      newPassword += upper.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber !== true && chosenSpecial !== true){
    //just lowercase - 
    for (var i = 0; i < chosenLength; i++){
      random = Math.floor(Math.random()*lower.length);
      newPassword += lower.substring(random, random+1); 
    };
    document.querySelector("#password").textContent = newPassword; 
  } else {
    //all no --> "Please select at least one of the choices" then reruns function
    alert("Password must contain at least one of the following for a return: uppercase letters, lowercase letters, numbers, or special characters.");
  }
};
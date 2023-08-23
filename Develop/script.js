// PSEUDO CODE: 
// 1) Make series of prompts to ask user about password.
//     How long? Any upper or lower case? Any Speical characters or numbers? 
// 2) Make a generate password function that follows the users prompt inputs.
// 3) Validate the input
// 4)Generate the password and display on webpage. 




// List out any variables/arrays  
// a) Password length, Lower, Upper, number, and special character.
var characterLength = 8; 
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', '[', ']', '{', '}', '+', '=' ]; 
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z' ];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]; 




// Assignment code here


//  make the button work
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // Returns true or false 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Making a generate password function:
function generatePassword() {
  console.log("You clicked the button!");
  var password = "";
  // Create for loop to get the random letters.  
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomLetter]; 
  }
    return password; 
  return "Generated password will go here!";
}

// Prompt the user for the password criteria 
  // a) Password length 8 < 128
  // b) Lowercase, uppercase, numbers, special characters
function getPrompts() {
  choiceArr = [];  

  characterLength = prompt("How many characters do you want your password to be? (8-128 characters)");
  
  if(characterLength < 8 || characterLength > 128) { // This should be false
    alert("The length of your password must be between 8-128 characters! Try again.");
    return false; 
  } 

  if (confirm("Do you want Uppercase letters in your password?"))
    choiceArr = choiceArr.concat(upperCaseArr); 
  if (confirm("Do you want lowercase letters in your password?"))
    choiceArr = choiceArr.concat(lowerCaseArr);
    if (confirm("Do you want numbers in your password?"))
    choiceArr = choiceArr.concat(numberArr);
    if (confirm("Do you want any special characters in your password?"))
    choiceArr = choiceArr.concat(specialCharArr);
  return true; 
}






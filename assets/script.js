// Assignment code here
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var specialChar = ['!', '\"', '#', '$', '%', '&', '\'', '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',];

var numbersMessage = 'Do you want to include numbers in your password?';
var lettersMessage = 'Do you want to include letters in your password?';
var specialCharMessage = 'Do you want to include special characters in your password?';

document.getElementById('generate').onclick = startGenerating;

console.log(Math.random() * numbers * letters * specialChar);

var startGenerating = function() {
  var userChoice = window.prompt(numbersMessage);
  if (!userChoice) {
    return;
  }
};

startGenerating();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

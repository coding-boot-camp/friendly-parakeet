// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordBase = ""
var numberBase = "0123456789"
var specialBase = "!@#$%^&*()_+-=<>?{}[]`~"
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseBase = uppercaseBase.toLowerCase()
var temp = [];


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

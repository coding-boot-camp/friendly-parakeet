// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

function generatePassword() {
  //Asking password length 
  var passwordLength = parseInt(prompt("Please enter number of charactors for password."));
  // console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter between 8 and 128 characters.");
    passwordLength = parseInt(prompt("Please enter number of charactors for password."));
  }
}

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

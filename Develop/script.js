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
  //2. confirming Character type 
  var includesUpper = confirm("Would you like to include uppercase?");
  var includesLower = confirm("Would you like to include lowercase?");
  var includesNumeric = confirm("Would you like to include numbers?");
  var includesSpecial = confirm("Would you like to include special characters?");
  // console.log(includesUpper);
  // console.log(includesLower);
  // console.log(includesNumeric);
  // console.log(includesSpecial);

  // 3. Either one option 
  if (includesUpper === false && includesLower === false && includesNumeric === false && includesSpecial === false) {
    alert("Please select a valid character type.")
    includesUpper = confirm("Would you like to include uppercase?");
    includesLower = confirm("Would you like to include lowercase?");
    includesNumeric = confirm("Would you like to include numbers?");
    includesSpecial = confirm("Would you like to include special characters?");
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

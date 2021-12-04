// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "0123456789";

var symbols = "!@#$%^&*_-+=";

  
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

function generatePassword(){
// length 
//lowercase
//uppercase
// special
// numbers
// password to be returned

var allLower = "abcdefghijklmnopqrstuvwxyz"
var allUpper = allLower.toUpperCase();
var allSpecial = " ";
var allNums = " ";

var allCharacterPool = " ";

// turn into an array : google how to turn into a array
var password = " ";

var passwordLength = parseInt(prompt("ho many characters"));

while (passwordLength < 8 || passwordLength > 128) {
  alert(" thats not allowed");
  passwordLength = prompt (" How many characters");
}


var passwordLower = confirm (" Do you want lowercase");
var passwordUpper = confirm (" Do you want uppercase");
var passwordSpecial = confirm (" Do tou want special characters");
var passwordNumbers = confirm (" Do tou want numbers");


if (passwordLower) {
  allCharacterPool += allLower;
}

if (passwordUpper) {
  allCharacterPool += allUpper;
}


if (passwordSpecial) {
  allCharacterPool += allSpecial;
}


if (passwordNumbers) {
  allCharacterPool += allNums;
}

for (password) {
  allCharacterPool += possibilites;
}


console.log(allCharacterPool)


return password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




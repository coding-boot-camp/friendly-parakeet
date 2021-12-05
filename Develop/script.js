// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
}

function generatePassword() {
// length 
//lowercase
//uppercase
// special
// numbers
// password to be returned

var allLower = "abcdefghijklmnopqrstuvwxyz"
var allUpper = allLower.toUpperCase();
var allSpecial = "!@#$%^&*_-+=";
var allNums = "0123456789";

var allCharacterPool = (" ");

// turn string into an array : google how to turn into a array????????
var password = (passwordLength);


var passwordLength = parseInt(prompt("How many characters do you want 8-128"));

while (passwordLength < 8 || passwordLength > 128) {
  alert("Unacceptable Condition");
  passwordLength = prompt (" How many characters do you want 8- 128?");
}


var passwordLower = confirm (" Do you want lowercase?");
var passwordUpper = confirm (" Do you want uppercase?");
var passwordSpecial = confirm (" Do you want special characters?");
var passwordNumbers = confirm (" Do you want numbers?");


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

for (var i = 0; i <= passwordLength; i++){
 let generatePassword = allCharacterPool[Math.floor(math.random() * 74)];
 password += generatePassword;
}

console.log(allCharacterPool)
document.getElementById('generate').innerHTML = password

return password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




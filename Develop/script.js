// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#generate");
var passwordBase = ""
var numberBase = "0123456789"
var specialBase = "!@#$%^&*()_+-=<>?{}[]`~"
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseBase = uppercaseBase.toLowerCase()
var temp = [];

function generatePassword() {
  console.log("Click me please!")
// User should see 4 prompts show

//Prompt 1: length of password
var length = prompt ("How many characters would you like? Pick a number between 8 and 128")
console.log(length) 

//check that the password is at least the min length(8) and at most the max length(128)
if (length < 8 || length > 128) {

// sends message to the saying the passwords min and max requirements  
  alert("Your password has to be between 8 and 128 charaters.");
  return generatePassword()
}

var wantSpecial = confirm("Would you like special characters?")
console.log(wantSpecial)

if (wantSpecial == true){
  for (var i = 0; i < numberBase.length; i++){
    temp.push(specialBase[i]);
  }
}

var wantNumber = confirm("Would you like numbers?")
console.log(wantNumber)
if (wantNumber == true) {
  for (var i = 0; i < numberBase.length; i++) {
    temp.push(numberBase[i]);
  }
}

console.log(temp)

for (var i = 0; i< length; i++) {
  passwordBase = passwordBase + temp[Math.floor(Math.random() * temp.length)];
}

return passwordBase;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

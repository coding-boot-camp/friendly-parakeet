// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordBase = ""
var numberBase = "0123456789"
var specialBase = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseBase = uppercaseBase.toLowerCase()

var temp = [];


function generatePassword() {
  console.log("Click the button")
  //Present with series of prompts for password
//Prompt 1: length of password
var length = prompt("How many characters will your password be? Enter a number between 8 and 128")
console.log(length)
//check that the password is at least 8 or up to 128 characters
if (length < 8 || length > 128) {
 // want to send them a message saying between 8 adn 128
 alert("Your password must be between 8 and 128");
 return generatePassword()
}

var wantLower = confirm("Do you want lowercase?")
console.log(wantLower)
if (wantLower == true){
  for (var i = 0; i < lowercaseBase.length; i++){
  temp.push(lowercaseBase[i]);
}
}
var wantUpper = confirm("Do you want uppercase?")
console.log(wantUpper)
if (wantUpper == true){
  for (var i = 0; i < uppercaseBase.length; i++){
    temp.push(uppercaseBase[i]);
  }
}
var wantSpecial = confirm("Do you want special charaters?")
console.log(wantSpecial)
if (wantSpecial == true){
  for (var i = 0; i < specialBase.length; i++){
     temp.push(specialBase[i]);
  }
}

var wantNumber = confirm("Do you want numbers?")
console.log(wantNumber)
if (wantNumber == true){
  for (var i = 0; i < numberBase.length; i++){
    temp.push(numberBase[i]);
  }
}

console.log(temp)

for (var i = 0; i< length; i++){
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

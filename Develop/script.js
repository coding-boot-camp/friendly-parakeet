// Assignment code here

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



//is there a reason why when we define variables in JS that we don't use the same word that we used for the class?


//
// var password = '';
// for (var i=0; i< num; i++) {
//  password += writePassword();
//}
// return password;
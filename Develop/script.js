// Assignment code here
const numericChar = ['0','1','2','3','4','5','6','7','8','9']
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const specialChar = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','?','/','.','{','}','[',']','<','>']
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//do i need to change const to let because they will be pulled by getRandom? 
  let charCodes = "";
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  let (characterNum) = prompt("How many characters in the password");
  console.log((characterNum) > 8 && (characterNum) < 128) {
    alert("Password must be between 8-128 characters in length");
    }
  
  let upperCase = prompt("do you want to use uppercase characters in your password? Press cancel for no.");
 console.log()

  let lowerCase = prompt("do you want to use lowercase characters in your password? Press cancel for no.");
 
  let numericChar = prompt("Numeric characters?");

  let specialChar = prompt("do you want to use special characters in your password? Press cancel for no.");
  

}

function getRandom() {
  for (let i = 0; i < characterNum.length; i++) {
     charCodes[Math.floor(Math.random() * charCodes.length)]
     return Math.random() * (128 - 8);
  }
   return "password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


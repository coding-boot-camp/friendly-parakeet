// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function(){
  var newPassword = ''
  var passwordLength = prompt('use at least 8 to 128 characters to create password')
  console.log(passwordLength)
  if(passwordLength >= 8 && passwordLength <= 128){
    var lowercaseConfirm = confirm('Would you like lowercase charaters in your password?')
    console.log(lowercaseConfirm)
    var uppercaseConfirm = confirm('Would you like uppercase charaters in your password?')
    console.log(uppercaseConfirm)
    var numericConfirm = confirm('Would you like numeric charaters in your password?')
    console.log(numericConfirm)
    var specialConfirm = confirm('Would you like special charaters in your password?')
    console.log(specialConfirm)
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numeric = "1234567890"
    var special = "!@#$%^&*()"
    for(var i = 0; i< passwordLength; i++){

    if(lowercaseConfirm === true && newPassword.length < passwordLength){
      var randomIndex = Math.floor(Math.random() *26)
      newPassword = newPassword + lowercase[randomIndex]
    }
    if(uppercaseConfirm === true && newPassword.length < passwordLength){
      var randomIndex = Math.floor(Math.random() *26)
      newPassword = newPassword + uppercase[randomIndex]
    }
    if(numericConfirm === true && newPassword.length < passwordLength){
      var randomIndex = Math.floor(Math.random() *10)
      newPassword = newPassword + numeric[randomIndex]
    }
    if(specialConfirm === true && newPassword.length < passwordLength){
      var randomIndex = Math.floor(Math.random() *10)
      newPassword = newPassword + special[randomIndex]
    }
  }
  }else{
    alert('Sorry outside of 8-128 characters range')
  }
  return newPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

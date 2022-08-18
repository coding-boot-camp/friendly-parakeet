// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordBase = "";
var numberBase = "0123456789";
var specialBase = "!@#$%^&*()_+-=<>?{}[]`~";
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseBase = uppercaseBase.toLowerCase();
var temp = [];

function generatePassword() {
  console.log("Click me please!");
  // User should see 4 prompts show

  //Prompt 1: length of password
  var length = prompt ("How many characters would you like? Pick a number between 8 and 128");
  console.log(length);

  //check that the password is at least the min length(8) and at most the max length(128)
  if (length < 8 || length > 128) {

   // sends message to the saying the passwords min and max requirements  
   alert("Your password has to be between 8 and 128 charaters.");
   return generatePassword()
  }

  //send message asking user if they want lowercase letters 
  var wantLower = confirm("Would you like lowercase letters?")
  console.log(wantLower)

  //adds lowercase letters if choice is choosen
  if (wantLower == true) {
    for (var i = 0; i < lowercaseBase.length; i++){
      temp.push(lowercaseBase[i]);
    }
  }

  // sends message asking if user would like uppercase letters
  var wantUpper = confirm ("Would you like uppercase letters?")
  console.log(wantUpper)

  //adds uppercase letters if choosen
  if (wantUpper == true) {
    for (var i = 0; i <uppercaseBase.length; i++){
      temp.push(uppercaseBase[i]);
    }
  }

  //sends message asking if user would like special charaters
  var wantSpecial = confirm("Would you like special characters?")
  console.log(wantSpecial)

  //adds special charaters if choosen
  if (wantSpecial == true){
    for (var i = 0; i < numberBase.length; i++){
      temp.push(specialBase[i]);
    }
  }

  //sends message asking if user would like numbers
  var wantNumber = confirm("Would you like numbers?")
  console.log(wantNumber)

  //adds numbers if choosen
  if (wantNumber == true) {
    for (var i = 0; i < numberBase.length; i++) {
      temp.push(numberBase[i]);
    }
  }

  console.log(temp)

  //takes the variables listed above and combines them
  for (var i = 0; i< length; i++) {
    passwordBase = passwordBase + temp[Math.floor(Math.random() * temp.length)];
  }

  //takes that information but doesn't show up on screen yet
  return passwordBase;

}


// this writes the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// this generates the password for the user to see
generateBtn.addEventListener("click", writePassword);

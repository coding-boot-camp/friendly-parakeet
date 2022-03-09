// Assignment code here
var passwordLength;
var passwordLower;
var passwordUpper;
var passwordNumeric;
var passwordSpecial;
var attributesGood;

// Class to hold password attributes
class passwordAtt{
  constructor(length, lowers, uppers, numerics, specials){
    this.length = length;
    this.lowers = lowers;
    this.uppers = uppers;
    this.numerics = numerics;
    this.specials = specials;
  }
}

// Function for gathering password critera with windows and constructing the passwordAtt class
function gatherCritera() {
 
  // Gather password critera (length = 8-128 chars)
  const length = Number(window.prompt("Please enter length of password between 8-128 characters:", ""));
  var goodLength;
  if(length >= 8 && length <= 128){
    passwordLength = length;
    // console.log("password length : " + passwordLength);
    goodLength = true;
  }

  // Gather password critera (lower, upper, numeric, special characters)
  var lower = window.confirm("Include lower case characters in password?");
  passwordLower = lower;
  // console.log(passwordLower);

  var upper = window.confirm("Include upper case characters in password?");
  passwordUpper = upper;
  // console.log(passwordUpper);

  var numeric = window.confirm("Include numeric characters in password?");
  passwordNumeric = numeric;
  // console.log(passwordNumeric);

  var special = window.confirm("Incluse special characters in password?");
  passwordSpecial = special;
  // console.log(passwordSpecial);

  if(goodLength){
    if( lower || upper || numeric || special){
      attributesGood = true;
      // console.log("The attributes are passable. attributesGood = " + attributesGood);
    }
    else {
      attributesGood = false;
      // console.log("The attributes are NOT passable. A character type was not selected. attributesGood = " + attributesGood);  
    }
    
  }
  else 
  { attributesGood = false;
    // console.log("The attributes are NOT passable. Password Length too short. attributesGood = " + attributesGood);  
  }

}

function generatePassword() {
  const lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "-", "<", ">", "/", "?"];
  let passwordArray = [];

  gatherCritera();
  const myPassword = new passwordAtt(passwordLength, passwordLower, passwordUpper, passwordNumeric, passwordSpecial);
  // console.log(myPassword) //verify values were properly entered into passwordAtt class
  // console.log(myPassword.passwordLower)
  if(!attributesGood) {
    window.confirm("You must enter a password length of 8-128 and select at least one character type.")
    return "Please Try Again"
  }
  else {
    if(myPassword.lowers == true){
      passwordArray.push(...lowerAlphabet);
    }
    if(myPassword.uppers == true){
      passwordArray.push(...upperAlphabet);
    }
    if(myPassword.numerics == true){
      passwordArray.push(...numerals);
    }
    if(myPassword.specials == true){
      passwordArray.push(...specialChars);
    }

    // console.log(passwordArray);

    // console.log(myPassword.length);

    let finalPass = [];
    for( let i = 0; i < myPassword.length; i++){
      var j = Math.floor(Math.random() * (passwordArray.length - 1));
      finalPass[i] = passwordArray[j];
      // console.log(i);
    }

    // console.log(finalPass);

    return finalPass.join("");

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

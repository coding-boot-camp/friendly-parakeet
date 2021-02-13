// Assignment code here


generatePassword = () => {
  //set password length with user input 
  var passLength = window.prompt("How long do you want your password? Choose a length between 8 and 128.");

  var acceptanceCriteria = ['yes', 'no'];
  
  //if entry is invalid make them try again 
  if (passLength < 8 || passLength > 128) {
    passLength = window.prompt("Sorry, that is not a valid option. \nPlease select a number between 8 and 128.");
  }

  //prompt to include lowercase letters. 
  var lowerCase = window.prompt("Would you like lowercase letters? Please enter 'yes' or 'no'" );

  //prompt to include uppercase letters. 
  var upperCase = window.prompt("Would you like uppercase letters? Please enter 'yes' or 'no'" );

  //prompt to include numbers.
  var numerical = window.prompt("Would you like numbers included? Please enter 'yes' or 'no'" );
  
  //prompt to include special characters. 
  var specialChar = window.prompt("Would you like special characters? Please enter 'yes' or 'no'");

  //check to see if any criteria was selected 
  if ((lowerCase === 'no') && (upperCase === 'no') && (numerical === 'no') && (specialChar === 'no')) {
    window.alert("ERROR: no criteria were selected, please try again.");
    generatePassword();
  }

  //create holder array for user input characters
  var passwordBank = [];

  //create arrays of all possible inclusions
  var lowerCaseBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCaseBank = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numBank = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharBank = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '=', ',', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  
  //set empty string to return 
  let password = '';

  //based on user input, concat character array(s) with holder array
  if (lowerCase === 'yes') {
    passwordBank = passwordBank.concat(lowerCaseBank);
  }
  if (upperCase === 'yes') {
    passwordBank = passwordBank.concat(upperCaseBank);
  }
  if (numerical === 'yes') {
    passwordBank = passwordBank.concat(numBank);
  }
  if (specialChar === 'yes') {
    passwordBank = passwordBank.concat(specialCharBank);
  }

  //for loop using user inputted password length 
  for (i = 0; i < passLength; i++) {

    //concat final string with random index of the character holder array 
    password += passwordBank[Math.floor(Math.random() * passwordBank.length)];
  }

  //return final password 
  return password;
};




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

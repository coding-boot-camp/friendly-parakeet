// Assignment code here
// Global Variables
var passwordLength = 0;
var passwordType = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false
};
var passwordCharacters = "";
var passwordResults = "";

// Password Criterea

// Generate Password Function
var generatePassword = function () {
  // Select length of password (8 - 128 characters)
  passwordLength = window.prompt("Please select a length for your password from 8 to 128 characters.");
 
  passwordLength = parseInt(passwordLength);
  // Checks to make sure input is a number and that is is between 8 - 128
  if (!passwordLength) {
    window.alert("Invalid Input or Cancelled. Please Try Again.");
    return
  }
  else if (passwordLength > 128 || passwordLength < 8) {
    window.alert("You did not select a number between the range given. Password must be between 8 - 128 characters long.")
    return
  }
  // Select which character types you'd like included (lowercase, uppercase, numberic, and/or special charactrs)
  var passwordCriterea = window.prompt("Which type of characters would you like in your password? Type 1 for lowercase, 2 for uppercase, 3 for numeric, and 4 for special characters. You can enter more then one but make sure each number is together and from least to greatest. Example (134)");
  passwordCriterea = parseInt(passwordCriterea);

  // Switch statement to run through all of the possible combinations
  switch (passwordCriterea) {
    case 1:
      passwordType.lowercase = true;
      break;
    case 2:
      passwordType.uppercase = true;
      break;
    case 3: 
      passwordType.numeric = true;
      break;
    case 4:
      passwordType.specialCharacters = true;
      break;
    case 12:
      passwordType.lowercase = true;
      passwordType.uppercase = true;
      break;
    case 123:
      passwordType.lowercase = true;
      passwordType.uppercase = true;
      passwordType.numeric = true;
      break;
    case 124:
      passwordType.lowercase = true;
      passwordType.uppercase = true;
      passwordType.specialCharacters = true;
      break;
    case 1234:
      passwordType.lowercase = true;
      passwordType.uppercase = true;
      passwordType.numeric = true;
      passwordType.specialCharacters = true;
      break;
    case 13:
      passwordType.lowercase = true;
      passwordType.numeric = true;
      break;
    case 134:
      passwordType.lowercase = true;
      passwordType.numeric = true;
      passwordType.specialCharacters = true;
      break;
    case 14:
      passwordType.lowercase = true;
      passwordType.specialCharacters = true;
      break;
    case 23:
      passwordType.uppercase = true;
      passwordType.numeric = true;
      break;
    case 24:
      passwordType.uppercase = true;
      passwordType.specialCharacters = true;
      break;
    case 234:
      passwordType.uppercase = true;
      passwordType.numeric = true;
      passwordType.specialCharacters = true;
      break;
    case 34: 
      passwordType.numeric = true;
      passwordType.specialCharacters = true;
      break;
    default:
      window.alert("Not a valid input.")
      break;
  };

  // These if statements will add all of the selected Character Types
  if (passwordType.lowercase) {
    passwordCharacters = "abcdefghijklmnopqrstuvwxyz";
  };
  if (passwordType.uppercase) {
    passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
  if (passwordType.numeric) {
    passwordCharacters = passwordCharacters + "0123456789";
  };
  if (passwordType.specialCharacters) {
    passwordCharacters = passwordCharacters + "!@#$%^&*?~";
  };

  // Variable to receive the length of the passwordCharacters
  var passwordCharacterLength = passwordCharacters.length;

  // This function creates the password by randomly selecting characters from the passwordCharacters variable
  function makePassword () {
    for (var i = 0; i < passwordLength; i++) {
      passwordResults += passwordCharacters.charAt(Math.random() * (passwordCharacterLength - 1) + 1);
    };
    return passwordResults;
  }
  // Alerts user that they have created a new password
  window.alert("Generating Password.")

  return makePassword();
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Resetting the password
  passwordResults = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Will only update text if there is a password
  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

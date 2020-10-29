// Assignment code here

// Prompt #1: ask for password length
var invalidLength = true; // The output of this window prompt will be a string, thus an invalid length

while (invalidLength) {
  // Ask the user to enter the number of characters
  var passwordLength = parseInt(window.prompt("Please enter how many characters you would like the password to be."));
  console.log(passwordLength);
  
  if (passwordLength) { //If password length (after being parseInt) is in fact a number then...
    if (passwordLength>=8 && passwordLength <= 128) { // Now check if the number that was entered was between 8 and 128 inclusive
      invalidLength = false; // If both conditions are true, switch invalidLength to false so it can exit the while loop
      break; // break out of the while loop; if for whatever reason, this doesnt work, the invalidLength = false will break it as well 
    } else {
      window.alert("Please enter a valid number between 8 and 128 inclusive."); // show error alert if the number doesnt fit this criteria
    }
  } else {
    window.alert("Please enter a valid number."); // show error alert if the number doesnt fit this criteria
  }
  // I could have did an && Condition (passwordLength && (passwordLength>=8 && passwordLength <= 128)) and 
  // avoided the nested if statements; however I didn't want to do it that way because then I couldn't give detailed
  // alert messages as to what the individual was doing incorrectly
}

// Prompt #2: ask what type of characters are allowed
// create an array of objects that will keep track of which type of characters the user would like.
var charTypes = [
  {
    name: "lowercase",
    included: true,
    chars: "abcdefghijklmnopqrstuvwxyz"
  },
  {
    name: "UPPERCASE",
    included: true,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    name: "numeric",
    included: true,
    chars: "0123456789"
  },
  {
    name: "special",
    included: true,
    chars: " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  },
];
// have a running "list" of characters that are acceptable (it is really a string that will be added onto)
// this string will start as empty
var acceptableChars = ""
// loop through the array of objects
for (i = 0; i < charTypes.length; i++) {
  var includedConfirm = window.confirm("Would you like your password to include " + charTypes[i].name + " characters?");
  if (includedConfirm) {
    charTypes[i].included = true; // not very necessary but I would like to keep track in a bool format for each object
    // Append the characters to the acceptableChars string
    acceptableChars = acceptableChars + charTypes[i].chars
  } else {
    charTypes[i].included = false;
  }
}
console.log(acceptableChars)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(passwordLength); // DELETE!!! This is here for development reasons

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

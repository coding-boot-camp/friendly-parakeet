// Assignment code here
// * window.alert to create a window alert to notify user to select password criteria to begin
window.alert("To generate a password, begin by adjusting the criteria needed for the password");
// generate multiple prompts to confirm if user wants different special characters
window.confirm("Select below from dropdown list below");

function passwordSelect() {
  var selection = prompt("Would you like to generate a password?");
    if (selection != 'yes') {
      console.log(selection);
    }
  }



// Get references to the #generate element in the html doc in the card-footer class 
var generateBtn = document.querySelector("#generate");

// create function to generate random password with switch case for adding numbers, special characters, lowercase, uppercase mixed case, etc


// Write password to the #password input
function writePassword() {
  // the variable password is linked to the textarea tag to generate a new password 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  generatePassword = Math.random();
  passwordText.value = password;
  console.log(generatePassword);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(password);


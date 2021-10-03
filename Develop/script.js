// Assignment code here
// * window.alert to create a window alert to notify user to select password criteria to begin
window.alert("To generate a password, begin by adjusting the criteria needed for the password");
// generate multiple prompts to confirm if user wants different special characters
window.confirm("Select password options from prompts or choose no in next prompt to select from dropdown list below");


// function created to prompt user to make selections in a prompt window or a dropdown list
function passwordSelect() {
  var selection = window.prompt("Would you like to generate a password?");
    if (selection === 'yes') {
      // console.log(selection);
    }else if (selection === 'no') {
      window.alert("Choose from dropdown list below to determine required password criteria")
    } else {
      window.alert("Error, please try again! Please enter either yes or no to continue")
    }
  }
passwordSelect();



// Get references to the #generate element in the html doc in the card-footer class 
var generateBtn = document.querySelector("#generate");

// create function to generate random password with switch case for adding numbers, special characters, lowercase, uppercase mixed case, etc


// Write password to the #password input
function writePassword() {
  // the variable password is linked to the textarea tag to generate a new password 
  var password = generatePassword();
      //assign a value to the 
  var passwordText = document.querySelector("#password");

  generatePassword = Math.random();
  passwordText.value = password;
  console.log(generatePassword);
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(password);


// Assignment code here
// * window.alert to create a window alert to notify user to select password criteria to begin
window.alert("To generate a password, begin by adjusting the criteria needed for the password");
// generate multiple prompts to confirm if user wants different special characters
window.confirm("Select password options from prompts or choose no in next prompt to select from dropdown list below");


// function created to prompt user to make selections in a prompt window or a dropdown list
function passwordSelect() {
  var selection = window.prompt("Would you like to generate a password?");
    if (selection === 'yes') {
      window.confirm()
    }else if (selection === 'no') {
      window.alert("Okay, please refresh page to continue with password generation")
    } else {
      window.alert("Error, please try again! Please enter either yes or no to continue")
    }
  }
passwordSelect();

// add selections to by creating a string of numbers, another of letters , special characters
// letterABC created to pull individual letters from string - join them latter
let lettersABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// not sure if numbers123 is gonna produce the correct value I am looking for 
//function to generate a random number value between 0 and nine -- use function later to call it and join multiple together. 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let numbers123 = getRandomIntInclusive();



// var capUppercase = 
// console.log(capUppercase);


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

// Add event listener to generate button- this one below using the click method to use the function writePassword to generate the password when the button is clicked
generateBtn.addEventListener("click", writePassword);

console.log(password);


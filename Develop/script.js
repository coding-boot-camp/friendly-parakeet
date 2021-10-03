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

// add window prompt to ask if the user wants numbers generated
function numberSelect() {
  var selection = window.prompt("Would you like to include numbers to your random password?"); 
  if (selection === 'yes' || selection === 'YES') {
    return getRandomIntInclusive();
  } else if (selection === 'no' || selection === ' ' || selection === 'NO') {
    
  }
}
 numberSelect();

// add window prompt to ask if the user wants numbers generated

// add selections to by creating a string of numbers, another of letters , special characters
// add window alert to question user if they would like to include letters and then one more to confirm upper/lowercase
window.confirm("Would you like your Passwword to include letters?")
let caseChoice = window.prompt("Do you need both upper and lowercase? Type yes or no.") 
  if (caseChoice === 'yes' || caseChoice === 'YES') {
    window.prompt("Choose by typing uppercase, lowercase, or both ") 
  } else if ( caseChoice === 'No' || caseChoice === 'NO' || caseChoice === ''){
    window.alert("Choose next option in new prompt")
  }
// add a function to generate a random letter from the letterABC string

function getRandomString(length) {
  // letterABC created to pull individual letters from string - join them latter
  var lettersABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var length = '';
  for ( var i = 0; i < length; i++) {
   length += lettersABC.charAt(Math.floor(Math.random() * lettersABC.length));
  }
  
  return length;
  
}
console.log(getRandomString(length));





let charactersRan = [ '! " # $ % & () * + , - . / : ; < = > ? @  \ ^ _ ` | '];


//window.prompt to ask user how many characters their password should be
var characterSelect = window.prompt("How long would you like your generated password to be?? Please enter a number between 8 and no more than 128 characters")
  if (characterSelect => 8 || characterSelect <= 128 ) {
    window.alert("You chose for your password to be " + characterSelect + " characters long.");
  }

//function to generate a random number value between 0 and nine -- use function later to call it and join multiple together. 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// function succesfully calls random number between 0 and 9
console.log(getRandomIntInclusive());


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


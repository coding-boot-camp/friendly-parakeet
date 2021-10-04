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
// add a function to generate a random letter from the letterABC string

function getRandomString() {
  // letterABC created to pull individual letters from string - join them latter
  const lettersABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return lettersABC[Math.floor(Math.random() * lettersABC.length)];
  // var length = '';
  // for ( var i = 0; i < length; i++) {
  //  length += lettersABC.charAt(Math.floor(Math.random() * lettersABC.length));
  // }
  
  // return length;
  
}
console.log(getRandomString(length));


// add window alert to question user if they would like to include letters and then one more to confirm upper/lowercase
function getCasing() {

window.confirm("Would you like your Password to include letters?")
// case choice variable created to prompt user to make choice for upper case 
let caseChoice = window.prompt("Do you need also need Uppercase letters? Type yes, no")
// var variable created to make a for loop that runs through the users choice and switched the choice to uppercase randomly
var upLowCase = '';
for (var i = 0; i < upLowCase.length; i++)
  if (caseChoice === 'yes' || caseChoice === 'YES') {
    upLowCase += caseChoice.charAt(i).toUpperCase();
// else if the user chooses no or doesn't respond null or undefined the page will continue to next series of prompts
  } else if ( caseChoice === 'No' || caseChoice === 'NO' || caseChoice === '') {
    window.alert("Choose next option in new prompt")
  }
  else {
    upLowCase += caseChoice.toLowerCase();
  } 
  
return upLowCase;
}
getCasing();




// function charactersRan is to create a prompt that asks yes if the user would like special characters and chooses a random one using  math.random

function charactersRan () {
// special characters listed in string below
  const characters = '! " # $ % & () * + , - . / : ; < = > ? @  \ ^ _ ` | ';
// prompts user to type yes to add special characters
  var characterChoice = window.prompt("Would you like to include special characters like ! $ @ ? Please answer either yes or no in box below, then click okay/confirm");
// if the user answers yes or YES this will return a random char from the characters string
    if (characterChoice === 'yes' || characterChoice === 'YES') {
      return characters[Math.floor(Math.random() * characters.length)];
      
    } else if ( characterChoice === 'no' || characterChoice === 'NO' || characterChoice === ' ') {

    }

  }
//Log to check if charactersRan is working 
console.log(charactersRan());


//window.prompt to ask user how many characters their password should be
var characterSelect = window.prompt("How long would you like your generated password to be?? Please enter a number between 8 and no more than 128 characters")
  if (characterSelect => 8 || characterSelect <= 128 ) {
    window.alert("You chose for your password to be " + characterSelect + " characters long.");
  } else if (characterSelect < 8 || character > 128){
    window.alert("Error! Please choose a number between 8 and 128 to continue");
  }

//function to generate a random number value between 0 and nine -- use function later to call it and join multiple together. 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// function successfully calls random number between 0 and 9
console.log(getRandomIntInclusive());







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
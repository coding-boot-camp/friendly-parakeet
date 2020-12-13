// Assignment code here
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

// Set password length
function setPasswordLength() {
  const regex = /^\d+$/;
  const min = 8;
  const max = 128;

  var passwordLength = 0;

  var userInput = prompt(
    `Choose how long should your password be between ${min}-${max} or press 'OK' to default to a random password length`
  );

  if (userInput === 0 || typeof userInput === "undefined") {
    alert("Sorry to see you go!");
    return;
  } else if (userInput === "") {
    passwordLength = Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min
    );
    alert(`Your password length has been set to random number: ${passwordLength}`)
  } else {
    if (userInput.match(regex)) {
      userInput = parseInt(userInput);
      if (userInput < min || userInput > max) {
        alert(
          `The provided length of ${userInput} is not within the expected range ${min}-${max}. Let's try again!`
        );
        setPasswordLength();
      } else {
        passwordLength = userInput;
      }
    } else {
      alert(
        `The provided input "${userInput}" does not meet the criteria: ${min}-${max}. Let's try again!`
      );
      setPasswordLength();
    }
  }
  return passwordLength;
}
// Set password composition based on user preferences.
function setPasswordComposition() {
  var userInput;
  var passwordCompositionPreferences = [];

  userInput = confirm("Should password contain LOWERCASE letters?");
  if (userInput) {
    passwordCompositionPreferences.push(lowerCaseLetters);
  }
  userInput = confirm("Should password contain UPPERCASE letters?");
  if (userInput) {
    passwordCompositionPreferences.push(upperCaseLetters);
  }
  userInput = confirm("Should password contain NUMBERS?");
  if (userInput) {
    passwordCompositionPreferences.push(numbers);
  }
  userInput = confirm("Should password contain SPECIAL CHARACTERS?");
  if (userInput) {
    passwordCompositionPreferences.push(specialChars);
  }
  if (passwordCompositionPreferences.length === 0) {
    alert("At least one rule needs to be applied, please try again");
    setPasswordComposition();
  }
  return passwordCompositionPreferences;
}
// Generate random password based on the criteria defined by a user
function generatePassword(passwordPrefences) {
  var password = "";
  for (var i = 0; i < passwordPrefences.length; i++) {
    var randomStringIndex = Math.floor(
      Math.random() * passwordPrefences.composition.length
    );
    password += passwordPrefences.composition[randomStringIndex].charAt(
      Math.floor(
        Math.random() * passwordPrefences.composition[randomStringIndex].length
      )
    );
  }
  return password;
}
// Write generated password to the #password input
function writePassword() {
  var passwordPrefences = {
    length: 0,
    composition: [],
  };

  var passwordTextInputField = document.querySelector("#password");

  alert("Welcome! Let's generate your password!");
  passwordPrefences.length = setPasswordLength();
  console.log(passwordPrefences.length);

  if (
    passwordPrefences.length === 0 ||
    typeof passwordPrefences.length === "undefined"
  ) {
    return;
  } else {
    passwordPrefences.composition = setPasswordComposition(password);
    var password = generatePassword(passwordPrefences);
    passwordTextInputField.value = password;
  }
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

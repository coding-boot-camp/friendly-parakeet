// Assignment code here

// Declare passwordType to save the length and if users want to include special characters
var passwordType = {
  length: '',
  isIncludeSpecial:''
}
// Declare an empty string to save the final password to render
var render = '';
// Declare an array for pick up the password type randomly
var randomType = ['lower','upper','num'];


// Password creating start! Ask users to choose password length
function generatePassword(){
  let passLength = parseInt(prompt("Enter you length you want for the password (at least 8 characters, no more than 128 characters)"));

  // re-ask if the length doesn't meet the standard
  if(typeof(passLength)==='number' && 7 < passLength && passLength < 129){
    passwordType.length = passLength;
    characterType();
    // return a value for "passwordText" rendering
    return render
  }else{
    generatePassword();
    return render
  }
}

// Ask users wether include special characters or not
function characterType(){
  let special = confirm("Do you want to include special characters?");
  passwordType.isIncludeSpecial = special;
// if yes, add "special" to passwordType array
  if(passwordType.isIncludeSpecial===true){
    randomType.push('special');
    generating(randomType);
  }else{
    // if not, use the original array
    generating(randomType)
  }
}

// Generating the password!
function generating(type){
// this is the length for randomType array
  let randomLength = type.length;
  // This is the total length that users input
  let length = passwordType.length;
  // Declare an object for validation
  let passwordValidation = {
    lower:0,
    upper:0,
    num:0,
  }
  // Declare an empty sting to save the password
  let pass = '';
  // if users want to include special characters, add spec to the object
  if (passwordType.isIncludeSpecial){
    passwordValidation.spec=0;
  }

  // run loop to create the password until it meets the standard

  // pick what type of the password should be generated (lower, upper, number and special characters)
  for (i = 0; i < length; i++){
    let arrNum = Math.floor(Math.random() * randomLength);
    let pick = type[arrNum];

    // generating a specific single characters
    // generating a random number
    if(pick === 'num'){
      let randomNum = Math.floor(Math.random() * 10);
      passwordValidation.num++;
      pass += randomNum;
    }
    //  generating a random lower characters
    else if (pick === 'lower'){
      let randomLower = Math.floor(Math.random() * 25);
      let lowerCha = String.fromCharCode(97 + randomLower);
      passwordValidation.lower++;
      pass += lowerCha;
    } 
    // generating a random upper characters
    else if (pick === 'upper'){
      let randomUpper = Math.floor(Math.random() * 25);
      let upperCha = String.fromCharCode(65 + randomUpper);
      passwordValidation.upper++;
      pass += upperCha;
    } 
    // generating a random special characters
    else{
      let special = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
      let specialLength = special.length;
      let specNum = Math.floor(Math.random() * specialLength);
      let specialCha = special[specNum];
      passwordValidation.spec++;
      pass += specialCha;
    }
  }

  // validating if the generated password has meet the standard, if not, run generating again

  // if passwordValidation includes 0, means it doesn't meet the standard
  let finalValidation = Object.values(passwordValidation).includes(0);

  if(finalValidation === false){
    console.log(pass);
    randomType = ['lower','upper','num'];
    render = pass;
  }else{
    console.log(pass);
    generating(randomType);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

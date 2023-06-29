// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "~",
];

// im going to need prompts
// need a way to select which criteria to iclude (confirms?)
// need a prompt for length (between 8 -128)
// need confirms for each character type
//need to write an if statement to validate that at least one character type was chosen (alert)
// I need to set variables that have a value equal to the character types

function userPrompts() {
  var length = parseInt(
    prompt(
      "How long would you like your password to be? (must be between 8-128 characters"
    )
  );

  if (isNaN(length)) {
    alert("length must have a numeric value");
    return;
  }

  if (length < 8 || length > 128) {
    alert("length must be between 8 and 128 characters");
    return;
  }

  var ifLower = confirm("Do you want to include lowercase letters?");

  var ifUpper = confirm("Do you want to include uppercase letters?");

  var ifNum = confirm("Do you want to include numbers?");

  var ifSpec = confirm("Do you want to include special characters?");

  if (
    ifLower === false &&
    ifUpper === false &&
    ifNum === false &&
    ifSpec === false
  ) {
    alert("At least one character type must be selected");
    return;
  }

  var newPassword = generatePassword(length, ifLower, ifUpper, ifNum, ifSpec);
  return newPassword;
}

function generatePassword() {}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

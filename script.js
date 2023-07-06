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

// im going to need prompts
// need a way to select which criteria to iclude (confirms?)
// need a prompt for length (between 8 -128)
// need confirms for each character type
//need to write an if statement to validate that at least one character type was chosen (alert)
// I need to set variables that have a value equal to the character types

const generateBtn = document.querySelector("#generate");

const lowerCase = [
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

const upperCase = [
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

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const special = [
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

function userPrompts() {
  const length = parseInt(
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

  const ifLower = confirm("Do you want to include lowercase letters?");

  const ifUpper = confirm("Do you want to include uppercase letters?");

  const ifNum = confirm("Do you want to include numbers?");

  const ifSpec = confirm("Do you want to include special characters?");

  if (
    ifLower === false &&
    ifUpper === false &&
    ifNum === false &&
    ifSpec === false
  ) {
    alert("At least one character type must be selected");
    return;
  }

  const newPassword = generatePassword(length, ifLower, ifUpper, ifNum, ifSpec);
  return newPassword;
}

function randomize(array) {
  const randomI = Math.floor(Math.random() * array.length);
  const randomEl = array[randomI];

  return randomEl;
}

function generatePassword() {
  const choices = userPrompts();
  const finished = [];
  const possibilities = [];
  const actualities = [];

  if (choices.ifLower) {
    possibilities = possibilities.concat(lowerCase);
    actualities.push(randomize(lowerCase));
  }

  if (choices.ifUpper) {
    possibilities = possibilities.concat(upperCase);
    actualities.push(randomize(upperCase));
  }

  if (choices.ifNum) {
    possibilities = possibilities.concat(numeric);
    actualities.push(randomize(numeric));
  }

  if (choices.ifSpec) {
    possibilities = possibilities.concat(special);
    actualities.push(randomize(special));
  }

  for (var myChoices of choices) {
    myChoices.push(finished);
  }

  return finished.join(" ");
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

function generatePassword() {
  var userInput = window.prompt(
    "Please enter the desired length of the password (between 8 to 128) "
  );
  var userPasswordLength = parseInt(userInput);

  console.log(userPasswordLength);

  if (isNaN(userPasswordLength)) {
    window.alert("Please input numbers!");
    return;
  }
  if (userPasswordLength < 8 || 128 < userPasswordLength) {
    window.alert("Please input a number between 8-128!");
    return;
  }
}

function randomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function randomNumeric() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function randomSymbles() {
  var symbles = [" !#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
  return symbles[Math.floor(Math.random() * symbles.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

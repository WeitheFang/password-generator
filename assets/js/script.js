// Assignment code here

function generatePassword() {
  var userInput = window.prompt(
    "Please enter the desired length of the password (between 8 to 128) "
  );
  var userPasswordLength = parseInt(userInput);

  if (isNaN(userPasswordLength)) {
    window.alert("Please input numbers!");
    return;
  }
  if (userPasswordLength < 8 || 128 < userPasswordLength) {
    window.alert("Please input a number between 8-128!");
    return;
  }
  var userChoiceLowerCase = window.confirm(
    "Do you want lower case letters in your password?"
  );
  var userChoiceUpperCase = window.confirm(
    "Do you want upper case letters in your password?"
  );
  var userChoiceNumeric = window.confirm(
    "Do you want numbers in your password?"
  );
  var userChoiceSymbols = window.confirm(
    "Do you want symbols in your password?"
  );

  var lowerCase = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
    `g`,
    `h`,
    `i`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `o`,
    `p`,
    `q`,
    `r`,
    `s`,
    `t`,
    `u`,
    `v`,
    `w`,
    `x`,
    `y`,
    `z`,
  ];
  var upperCase = [
    `A`,
    `B`,
    `C`,
    `D`,
    `E`,
    `F`,
    `G`,
    `H`,
    `I`,
    `J`,
    `K`,
    `L`,
    `M`,
    `N`,
    `O`,
    `P`,
    `Q`,
    `R`,
    `S`,
    `T`,
    `U`,
    `V`,
    `W`,
    `X`,
    `Y`,
    `Z`,
  ];
  var numbers = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
  var symbols = [
    `!`,
    `"`,
    `#`,
    `$`,
    `%`,
    `&`,
    `'`,
    `(`,
    `)`,
    `*`,
    `+`,
    `,`,
    `-`,
    `.`,
    `/`,
    `:`,
    `;`,
    `<`,
    `=`,
    `>`,
    `?`,
    `@`,
    `[`,
    `]`,
    `^`,
    `_`,
    `{`,
    `}`,
    `|`,
    `~`,
  ];

  var userOptions = [];
  var generatePassword = "";

  if (userChoiceLowerCase === true) {
    userOptions.push(lowerCase);
  }
  if (userChoiceUpperCase === true) {
    userOptions.push(upperCase);
  }
  if (userChoiceNumeric === true) {
    userOptions.push(numbers);
  }
  if (userChoiceSymbols === true) {
    userOptions.push(symbols);
  }

  console.log(userOptions);
  for (i = 0; i < userPasswordLength; i++) {
    var randomPick = Math.floor(Math.random() * userOptions.length);
    console.log(randomPick);
    var generatePassword = userOptions[randomPick];
    //console.log(generatePassword);
  }
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

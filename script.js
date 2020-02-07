// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomNumber = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['~','!','@','#','$','%','^','&','*','(',')','-'];

var password = prompt("How long would you like your password? Please enter a number 8 -128.")

//BELOW: OR would it be 'for' --> 'alert' --> 'if' ??
var lowerCase = alert("Would you like your password to contain lower case letters? Click 'OK' for yes or 'Cancel' for no.");

if(lowerCase === true) {
  for (var i = 0; i < lowerCase.length; i++) {
    
    console.log(lowerCase[i]);
  }
}

var upperCase = alert("Would you like your password to contain upper case letters? Click 'OK' for yes or 'Cancel' for no.")

if(upperCase === true) {
// For Loop for upperCase
for (var j = 0; j < upperCase.length; j++) {
  console.log(upperCase[j]);
  }
}


var randomNumber = alert("Would you like your password to contain numbers? Click 'OK' for yes or 'Cancel' for no.")

if(randomNumber ==== true) {
// For Loop for randomNumber
for (var k = 0; k < randomNumber.length; k++) {
  console.log(randomNumber[k]);
  }
}

var symbol = alert("Would you like your password to contain numbers? Click 'OK' for yes or 'Cancel' for no.")

if(symbol === true) {
// For Loop for symbol
for (var l = 0; l < symbol.length; l++) {
  console.log(symbol[l]);
  }
}






//----------------------------------------------------

//From one video
//possible password values
var values = /^[0-9a-zA-Z]+$/; //OR let values = "write them"

let possiblepassword = "";

//create for loop to choose pw characters
for(var i = 0; i < passwordText; i++) {
    possiblepassword = possiblepassword + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//add password to display area
document.getElementById("password").value = possiblepassword;

//-----------------------------------------------------------

//From video:
function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function UpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function symbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



console.log(lowerCase());
console.log(UpperCase());
console.log(randomNumber());
console.log(symbol());


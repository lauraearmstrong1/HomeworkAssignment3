// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['~','!','@','#','$','%','^','&','*','(',')','-'];


// Write password to the #password input
function writePassword(password) {    //function that writes the password to the DOM
  
  var passwordText = document.querySelector("#password");   //grabs the area with the ID of #password

  passwordText.value = password;  //writes the password to the DOM
}
function generatePassword(length, arrChar) {  //taking the array of characters that they have selected and the length and generating the password from what they have selected
  var passwordHolder = ""
  console.log(length, arrChar)
  for (var i = 0; i < length; i++) {
    var randomArr = Math.floor(Math.random()*arrChar.length)
    var randomChar = Math.floor(Math.random()*arrChar[randomArr].length)
    passwordHolder= passwordHolder + arrChar[randomArr][randomChar]
    console.log(passwordHolder)

  }
  writePassword(passwordHolder) //calling what has already been established
}

function characters(length) {
  var arrChar =[]
  //lower case letters

  if(confirm("Would you like your password to contain lower case letters? Click 'OK' for yes or 'Cancel' for no.")) {
      arrChar.push(lowerCase);
  };
   //upper case letters
  
  if(confirm("Would you like your password to contain upper case letters? Click 'OK' for yes or 'Cancel' for no.")) {
  // For Loop for upperCase
    arrChar.push(upperCase)
  }
  
  //numbers

  
  if(confirm("Would you like your password to contain numbers? Click 'OK' for yes or 'Cancel' for no.")) {
  // For Loop for randomNumber
    arrChar.push(numbers)
  }
  
  //symbols

  
  if(confirm("Would you like your password to contain numbers? Click 'OK' for yes or 'Cancel' for no.")) {
  // For Loop for symbol
    arrChar.push(symbol)
  }
  if(arrChar.length){
    generatePassword(length, arrChar)
  }
  else{
    alert("You must select at least one character type")
    characters(length)
  }
}

function start() {

  var pwLength = prompt("How long would you like your password? Please enter a number 8 - 128.");
  if (pwLength < 8 || pwLength > 128) {
    pwLength = alert("Your password must be between 8 and 128 characters.");
    start()
  } else{
    characters(pwLength)
  }
}
//length of password



// Add event listener to generate button
generateBtn.addEventListener("click", start);




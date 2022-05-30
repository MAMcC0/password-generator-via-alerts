// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for lowercase & uppercase letters, special characters, and numbers
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'];


var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z'];

var specialCharacters = [
  '~', '!', '@', '#', '$', '%', '&', '*', '(', '-',
  '/', '.', '?'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var userInput = [];

// Write password to the #password input
function writePassword() {
  //prompt for how many characters to add
  var inputCharacters = prompt('How many characters would you like in your password (between 8-128 characters required)', '');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function charCheck() {
     if (inputCharacters < 8 || inputCharacters > 128) {
      return null;
    } else if (inputCharacters === '') {
      alert("You must put a number between 8-128 to continue");

    };
  }
  charCheck(inputCharacters);
  console.log(inputCharacters);

  var specialChars = confirm("Would you like special characters?");
  var smallChars= confirm("Would you like lowercase letters?");
  var bigChars = confirm("Would you like uppercase letters");
  var inputNums = confirm("Would you like numebers in your password?");

  if (!specialChars && !smallChars && !bigChars && !inputNums){
    alert("Please select at least one type of character");
    return generatePassword();
  };
  if (specialChars){
    userInput.concat(specialCharacters)
  };
  if (smallChars){
    userInput.concat(lowerAlphabet);
  };
  if (bigChars){
    userInput.concat(upperAlphabet);
  };

  if(inputNums){
    userInput.concat(numbers);
  }

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



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
var userPassword = [];

// Write password to the #password input
function writePassword() {
  //prompt for how many characters to add
  var inputCharacters = parseInt(prompt('How many characters would you like in your password (between 8-128 characters required)',''),10);
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //add parseInt to check if it is a number, then check if its between 8-128, push alerts if not
  passwordText.value = password;


  function charCheck() {
    if (!inputCharacters) {
      alert("Oops! Please put a number between 8-128 for your character choice");
      writePassword();
  
    }
    
    if (inputCharacters < 8 || inputCharacters > 128) {
      alert("Oops! Your number is not between 8-128 for your character choice ");
        writePassword();
    }




  } charCheck();
  userQuestions();
  

  function userQuestions() {

    var specialChars = confirm("Would you like special characters? Ok-Yes Cancel-No");
    var smallChars = confirm("Would you like lowercase letters? Ok-Yes Cancel-No");
    var bigChars = confirm("Would you like uppercase letters? Ok-Yes Cancel-No");
    var inputNums = confirm("Would you like numebers in your password? Ok-Yes Cancel-No");


    if (!specialChars && !smallChars && !bigChars && !inputNums) {
      alert("Please select at least one type of character");
      return generatePassword();
    };
    if (specialChars) {
      userInput.concat(specialCharacters)
    };
    if (smallChars) {
      userInput.concat(lowerAlphabet);
    };
    if (bigChars) {
      userInput.concat(upperAlphabet);
    };

    if (inputNums) {
      userInput.concat(numbers);
    }
  };
  // create random number 

  //loop through userinput arrray based on how many characters they entered into the prompt

  // check to make at least one of what they chose makes it into an array?

  // push the randomly generated character to an empty array called password array

  //return password array.join() --> makes it from an array into a string


};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



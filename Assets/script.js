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
  
  
  
 
//function to check that the characters are a number and between 8-128
console.log(passwordText);
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
  
// Function to ask what parameters the user wants in their password
  function userQuestions() {

    var specialChars = confirm("Would you like special characters? Ok-Yes Cancel-No");
    var smallChars = confirm("Would you like lowercase letters? Ok-Yes Cancel-No");
    var bigChars = confirm("Would you like uppercase letters? Ok-Yes Cancel-No");
    var inputNums = confirm("Would you like numbers in your password? Ok-Yes Cancel-No");

// To validate that something is selected
    if (!specialChars && !smallChars && !bigChars && !inputNums) {
      alert("Please select at least one type of character");
      return generatePassword();
    };

    // putting the selections into an empty array userInput that will be used to randomly select from
    if (specialChars) {
      userInput = userInput.concat(specialCharacters)
    };
    if (smallChars) {
      userInput = userInput.concat(lowerAlphabet);
    };
    if (bigChars) {
      userInput = userInput.concat(upperAlphabet);
    };

    if (inputNums) {
      userInput = userInput.concat(numbers);
    }
    console.log(userInput);
  };
  
  //loop that uses the inputCharacters from the first function
  // as the limits for its loop and while running generates a random number from the
  // userInput array 
for (var i = 0; i < inputCharacters; i++){


  userPassword = userPassword.concat(userInput[Math.floor(Math.random() * userInput.length)]);
}

console.log(userPassword);
// changes the array of randomly selected characters from array to string
var passwordDisplay = userPassword.join('');
// access HTMl to display generated password on webpage
console.log(passwordDisplay);
var passwordText = document.querySelector("#password");
passwordText.value = passwordDisplay;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



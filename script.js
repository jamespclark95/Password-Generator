

// Arrays for possible characters, numbers & letters

let numbers = '123456789';
let characters = '!@#$%^&*()';
let alphaLowerCase = "abcdefghijklmnopqrstuvwxyz";
let alphaUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// create an array out of character choices

let numbersArr = numbers.split('')
let characterArr = characters.split('')
let alphaLowerCaseArr = alphaLowerCase.split('')
let alphaUpperCaseArr = alphaUpperCase.split('')


// Generate Password Function

function generatePassword () {
  
  // Choose Password Length & Character Length Error Msg
  let confirmLength = (prompt('choose a number'))
    if (confirmLength <= 7 || confirmLength >= 129 || isNaN(confirmLength)){
      alert('Refresh your browser & choose a number from 8 - 128');
    return;
    }

  
  // Password Options & Criteria
    let includeNumbers = confirm('Do you want numbers in your password?')
    let includeCharacters = confirm('Do you want symbols in your password?')
    let includeLowerCase = confirm('Do you want lowercase letters in your password?')
    let includeUpperCase = confirm('Do you want UPPERCASE letters in your password?')
      if (!includeNumbers && !includeUpperCase && !includeLowerCase && !includeCharacters){
        alert('You need to choose at least one. Please refresh your browser!')
        return;
      }

    // Concatinate All Possible Choices
    let inputChoice = []

    if (includeNumbers === true) {
      inputChoice = inputChoice.concat(numbersArr)
    }
    if (includeCharacters === true) {
      inputChoice = inputChoice.concat(characterArr)
    }
    if (includeLowerCase === true) {
      inputChoice = inputChoice.concat(alphaLowerCaseArr)
    }
    if (includeUpperCase === true) {
      inputChoice = inputChoice.concat(alphaUpperCaseArr)
    };

    console.log(inputChoice)

    let results = [];



    for (var i = 0; i < confirmLength; i++) {
      let index = Math.floor(Math.random() * inputChoice.length)
      console.log(index)
      let passDigit = inputChoice[index]
      console.log(passDigit)
      results.push(passDigit)
    }
    return results.join('');
    
}




// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password !== undefined) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

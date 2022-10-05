// Assignment Code
// write special characters , lowercase, uppercase, and numbers as our password options
// we need 5 questions
var specialCharacters = ['!','@', '#', '$', '%', '^', '&', '*', '(',  ')', '?', '-', '_',];
var numericCharacters =['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passwordarray =[];
var plength = 8;

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", yourpassword);

var options = {
  plength: plength,
  includeLowercaseLetters: false,
  includeNumbers: false,
  includeSpecialCharacters: false,
  includeUppercaseLetters: false,
 };

function yourpassword() {
  var okquestions = questions()
}
 
 function generatePassword() {
  //var question= questions()
   var passwordText = document.querySelector("#password");
   var password = ''
   var possibleOptions = []
  if (options.includeNumbers) {
    possibleOptions = possibleOptions.concat(numericCharacters);
     }
   
    if (options.includeLowercaseLetters){
     possibleOptions = possibleOptions.concat(lowerCase);
     }

   if (options.includeSpecialCharacters){
     possibleOptions = possibleOptions.concat(specialCharacters);
    }

   if (options.includeUppercaseLetters){
     possibleOptions = possibleOptions.concat(upperCase);
    }
  if (options.addNumbers){
    possibleOptions = possibleOptions.concat(numericCharacters);
  }
   for (let i = 0; i < plength; i++) {
      var randomCharacters = Math.floor(Math.random() * possibleOptions.length);
      console.log(randomCharacters)
      password += possibleOptions[randomCharacters]
}
    passwordText.value = password;
}

     function questions() {
        plength = parseInt(prompt('How long do you want your password, it must be between 8-128 characters'));
        if (plength < 8 || plength > 128){
        alert('Please choose a number between 8-128');
        
        questions();
        return;
        }
        if (confirm("Would you like to include Numeric Characters?") == true) {
          options.includeNumbers = true;
        }
        if (confirm("Would you like to include Lowercase letters?") == true) {
          options.includeLowercaseLetters = true;
        }
        if (confirm("Would you like to include Special Characters?") == true) {
          options.includeSpecialCharacters =true;
        }
        if (confirm("Would you like to include Uppercase letters?") == true) {
          options.includeUppercaseLetters = true;
        }
       

      
  
  
  generatePassword();
      
    }


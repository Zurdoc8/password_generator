// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
// 1. Need to prompt the user with password criteria
//      a. Password length 8 - 52 Characters
var pwLength = window.prompt("Please specify your desired password length between 8 and 52");

if (pwLength === "" || pwLength === null || pwLength <= 7) {
    window.alert ("Minimum criteria lenght was not met! Please try again")
}
//      b. Include lower case upper case numbers special characters
    window.alert("Would you like to inlude lower case letters in your password?");
function getRndmLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRndmUpper() {
    return String.fromCharCode(Math.floor(Math.random() *26 ) + 65);
}

function getRndmNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRndmSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
    
}


console.log(getRndmLower(), getRndmUpper(), getRndmNumber(), getRndmSymbol());
// 2. Validate the input.
// 3. Generate password based on criteria.




// 4. Display the generated password on the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

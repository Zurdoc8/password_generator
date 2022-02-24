// Assignment code here
var pwLength = 8;
var pwChar = [];
var includeLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var includeUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var includeNumber = ['1', '2', '3', '4', '5', '6', '7','8', '9', '0'];
var includeSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 2. Validate the input.
function writePassword () {
    var promptAnswers = userPrompts ();
    if(promptAnswers) {
        var userPassword = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = userPassword;
    }
    else {
    passwordText.value = "";
    }
// 3. Generate password based on criteria.
function generatePassword() {
    var userPassword = "";
    for (var i = 0; i < pwLength; i++) {
        var rndmPassword = Math.floor(Math.random() * pwChar.length);
        userPassword = userPassword + pwChar[rndmPassword];
    // 4. Display the generated password on the page.xx
    }
    return userPassword;
    }
}
function userPrompts() {
    pwChar = [];
    // 1. Need to prompt the user with password criteria
    //      a. Password length 8 - 52 Characters
    pwLength = parseInt(window.prompt("Please specify your desired password length between 8 and 128"));

    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        window.alert ("Please select a number from the range provided! Try again");
        return false;
    }
    //promtp user to select desired character values.    
    if (window.confirm("Would you like to include lowercase letters?")) {
        pwChar = pwChar.concat(includeLower);
    }
    if (window.confirm("Click 'OK' to include uppercase letters in your password?")) {
            pwChar = pwChar.concat(includeUpper);
    }
    if (window.confirm("Click 'OK' to include numbers in your password?")) {
        pwChar = pwChar.concat(includeNumber);
    }
    if (window.confirm("Click 'OK' to include symbols in your password?")) {
        pwChar = pwChar.concat(includeSymbol);
    }
    return true;
    

}

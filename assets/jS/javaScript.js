// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var pwLength = "";
var pwChar = []
var includeLower;
var includeUpper;
var includeNumber;
var includeSymbol;

function writePassword () {
    var promptAnswers = rightPrompts ();
    if(promptAnswers) {
    var userPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = userPassword;
    }
    else {
        userPassword.value = "";
    }

function generatePassword() {
    var userPassword = "";
    for (var i = 0; i < pwLength; i++) {
        var rndmPassword = Math.floor(Math.random() * pwLength);
        password = password + pwChar[rndmPassword]
        
    }
    return userPassword;
    }
}
function rightPrompts() {
    // 1. Need to prompt the user with password criteria
    //      a. Password length 8 - 52 Characters
    var pwLength = parseInt((window.prompt("Please specify your desired password length between 8 and 128")));

    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        window.alert ("Please select a number from the range provided! Try again");
        return false;
    }
    //      b. Include lower case upper case numbers special characters
    var includeLower =  window.confirm("Click 'OK' to include lower case letters in your password?"); {
        if (includeLower) {
            pwChar = pwChar.concat(getRndmLower)
        }
        function getRndmLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    }
    var includeUpper =  window.confirm("Click 'OK' to inlude upper case letters in your password?"); {
        if (includeUpper) {
            pwChar = pwChar.concat([getRndmUpper])
        }
        function getRndmUpper() {
            return String.fromCharCode(Math.floor(Math.random() *26 ) + 65);
        }
        }
        var includeNumber =  window.confirm("Click 'OK' to inlude numbers in your password?"); {
        if (includeNumber) {
           pwChar = pwChar.concat([getRndmNumber])
           }
           function getRndmNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }        
        }
        var includeSymbol =  window.confirm("Click 'OK' to inlude symbols in your password?"); {
            if (includeSymbol) {
            pwChar = pwChar.concat([getRndmSymbol])
            }     
            function getRndmSymbol() {
            const symbols = "!@#$%^&*(){}[]=<>/,.";
            return symbols[Math.floor(Math.random() * symbols.length)];
            }
        }    
    // 2. Validate the input.
    while(getRndmLower === false && getRndmUpper === false && getRndmNumber === false && getRndmSymbol === false) {
    window.alert ("Please select AT LEAST one criteria for password to generate")
    }
// 4. Display the generated password on the page.
}
// 3. Generate password based on criteria.

// Write password to the #password input


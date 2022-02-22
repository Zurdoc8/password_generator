// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var pwLength = "";
var includeLower;
var includeUpper;
var includeNumber;
var includeSymbol;

function generatePassword() {
    // 1. Need to prompt the user with password criteria
    //      a. Password length 8 - 52 Characters
    var pwLength = window.prompt("Please specify your desired password length between 8 and 52");

    if (pwLength === "" || pwLength === null || pwLength <= 7) {
        window.alert ("Minimum criteria length was not met! Please try again");
        return "";
    }

    if (pwLength === "" || pwLength === null || pwLength >= 52) {
        window.alert ("Maximum criteria length was surpassed! Please try again");
        return "";
    }

    //      b. Include lower case upper case numbers special characters
    var includeLower =  window.confirm("Click 'OK' to inlude lower case letters in your password?"); {
            if (includeLower === "true" || includeLower === "Ok") {
            return pwChar += includeLower;
            }
            else

            function getRndmLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
    }
    
    var includeUpper =  window.confirm("Click 'OK' to inlude upper case letters in your password?"); {
        if (includeUpper === "true" || includeUpper === "Ok") {
            return pwChar += getRndmUpper;
            }
            else 
    

    function getRndmUpper() {
        return String.fromCharCode(Math.floor(Math.random() *26 ) + 65);
    }
    }

    var includeNumber =  window.confirm("Click 'OK' to inlude numbers in your password?"); {
        if (includeNumber === "true" || includeNumber === "Ok") {
            return pwChar += getRndmNumber;
        }
    }
    function getRndmNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    var includeSymbol =  window.confirm("Click 'OK' to inlude symbols in your password?"); {
        if (includeSymbol === "true" || includeSymbol === "Ok") {
            return  pwChar += getRndmSymbol;
        }

    function getRndmSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
    
    }
    }

console.log(getRndmLower(), getRndmUpper(), getRndmNumber(), getRndmSymbol());
// 2. Validate the input.
while(getRndmLower === false && getRndmUpper === false && getRndmNumber === false && getRndmSymbol === false) {
    window.alert ("Please select AT LEAST one criteria for password to generate")
}
}
// 3. Generate password based on criteria.
var pwChar = []

// if (includeLower) {
// pwChar = pwChar.concat(getRndmLower)
//}

if (includeUpper) {
    pwChar = pwChar.concat(getRndmUpper)
}

if (includeNumber) {
    pwChar = pwChar.concat(getRndmNumber)
}

if (includeSymbol) {
    pwChar = pwChar.concat(getRndmSymbol)
}



// 4. Display the generated password on the page.

var rndmPassword = ""

for (var i = 0; i < pwLength; i++) {
    rndmPassword = rndmPassword + pwChar[Math.floor(Math.random() * pwChar.length)];
    
    console.log(rndmPassword)
}

// Write password to the #password input

     function writePassword () {
     var password = generatePassword("");
     var passwordText = document.querySelector("#password");

     passwordText.value = password;

     
    }
    
         // Add event listener to generate button
         generateBtn.addEventListener("click", writePassword);
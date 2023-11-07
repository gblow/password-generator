var charLength = 8;
var choiceArr = [];

var number = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['!','"', '#','$','%','&','(',')','*','+','-','/',':',';','<','=','>','?','@'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  

// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var Prompt = pwPrompts ();
  
    if (Prompt) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
  }

}


function generatePassword() {
  console. log ("You clicked the generate button.")
  var password = "";
  for(var i = 0; i < charLength; i++) {
      var randomCharacter = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomCharacter];
  }
  
  return password;
    };


function pwPrompts() {
  choiceArr = [];
  
  charLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128)"))
    if (isNaN(charLength) || charLength <= 8 || charLength > 128){
     alert("Length has to be a number between 8 and 128");
    return false;
}

    if (confirm("Should numbers be included in your password?")){
  choiceArr = choiceArr.concat(number);
}

    if (confirm("Should special characters be included in your password?")) {
  choiceArr = choiceArr.concat(specialChar);
}

    if (confirm("Should uppercase letters be included in your password?")) {
  choiceArr = choiceArr.concat(uppercase);
}

    if (confirm("Should lowercase letters be included in your password?")) {
  choiceArr = choiceArr.concat(lowercase);

}
return true;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



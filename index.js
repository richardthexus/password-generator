const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passwordEl = document.querySelector("#password-el")
let isGenerated = false;

function generatePassword() {
  for (let i = 0; i < 15 ; i++) {
        let newPassword = characters[Math.floor ( Math.random() * characters.length )]
        passwordEl.textContent += newPassword; 
    } 
    isGenerated = true;
}

function checkGenerated () {
    if (isGenerated === false) {
            generatePassword(); 
        } else {
             return false;
        }
}

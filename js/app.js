let passwordElement = {
    length : document.getElementById('length'),
    capital : document.getElementById('capital'),
    lowercase : document.getElementById('lowercase'),
    number : document.getElementById('number'),
    specialChar : document.getElementById('special-char'),
    generatorBtn : document.getElementById('generator-btn'),
    showPassword : document.querySelector('.show-password'),
    copyToClipboard : document.querySelector('.copy-to-clipboard'),
    toolTip : document.querySelector('.tool-tip')
}

// generate password
let generatePassword = function() {
    let passLength = passwordElement.length.value;
    let isCapital = passwordElement.capital.checked;
    let isLowercase = passwordElement.lowercase.checked;
    let isNumber = passwordElement.number.checked;
    let isSpecialChar = passwordElement.specialChar.checked;

    let password = '';

    for(let i = 0; i < passLength; i++) {
        if(isCapital) {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
    
        if(isLowercase) {
            password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    
        if(isNumber) {
            password += Math.floor(Math.random() * 10);
        }
    
        if(isSpecialChar) {
            let specialChars = '!@#$%^&*';
            password += specialChars[Math.floor(Math.random() * specialChars.length)];
        }
    }

    passwordElement.showPassword.value = password;
}


passwordElement.generatorBtn.addEventListener('click', generatePassword);


// copy to clipboard
passwordElement.copyToClipboard.addEventListener('click', function(){
    passwordElement.showPassword.select();
    document.execCommand('Copy');
    passwordElement.toolTip.textContent = 'Copied!';
});
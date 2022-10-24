"use strict"

const inputRef = document.querySelector("#validation-input");

const onChekedNumbersOfInput = (event) => { 
    
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
    } else { 
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }

}

inputRef.addEventListener('blur', onChekedNumbersOfInput);
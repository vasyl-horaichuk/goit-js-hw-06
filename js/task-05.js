"use strict"

const inpuTextWithId = document.querySelector('#name-input');
const outputTextWithId = document.querySelector('#name-output');

inpuTextWithId.addEventListener('input', (event) => {
    if (inpuTextWithId.value === "") {
        outputTextWithId.textContent = "Anonymous";
        return;
    } else { 
        outputTextWithId.textContent = event.currentTarget.value;
    }
 
});
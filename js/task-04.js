"use strict"

const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
const counterValueWithId = document.querySelector('#value');

let counterValue = 0;

const changeValuePlus = (event) => {
        counterValue += 1;
        counterValueWithId.textContent = counterValue;
}

const changeValueMinus = (event) => {
        counterValue -= 1;
        counterValueWithId.textContent = counterValue;
    }

buttonDecrementEl.addEventListener('click', changeValueMinus);
buttonIncrementEl.addEventListener('click', changeValuePlus);
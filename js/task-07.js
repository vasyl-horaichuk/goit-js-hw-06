'use strict'

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onChekedTextOfInput = (event) => textRef.style.fontSize = `${event.currentTarget.value}px`;
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', onChekedTextOfInput);
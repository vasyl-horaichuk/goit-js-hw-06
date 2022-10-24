'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const handlerTargetButtonClick = (event) => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}

buttonRef.addEventListener('click', handlerTargetButtonClick);
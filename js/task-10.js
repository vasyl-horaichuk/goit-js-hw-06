'use strict'

const inputRef = document.querySelector('[type="number"]');
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => { 
  const elementsToAdd = [];
  for (let i = 0; i < amount; i+=1 ) { 
    const divRef = document.createElement('div')
    divRef.style.height = `${30 + 10 * i}px`
    divRef.style.width = `${30 + 10 * i}px`
    divRef.style.background = getRandomHexColor()
    elementsToAdd.push(divRef)
  }
  return elementsToAdd;
} 

const destroyBoxes = () => { 
  boxesRef.innerHTML = '';
}

buttonCreateRef.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputRef.value)
	boxesRef.append(...boxesToAdd)
})

console.log(inputRef.value);

buttonDestroyRef.addEventListener('click', () => {
	destroyBoxes.call()
})
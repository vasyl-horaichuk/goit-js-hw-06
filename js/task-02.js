"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListWithId = document.querySelector('#ingredients');

const markupForIteams = ingredients.map((element) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = element;
  return itemRef;
});
ingredientsListWithId.append(...markupForIteams); 

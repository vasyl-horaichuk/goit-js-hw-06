"use strict"

/*
  |==============================
  | Рішення 1
  |==============================
*/
// const categorylistWithId = document.querySelector('#categories');
// console.log(`Number of categories: ${categorylistWithId.children.length}`);

// const categoryItemByClassName = document.querySelectorAll('.item');
// console.log(categoryItemByClassName);

// categoryItemByClassName.forEach((element) => {
//     const titleByTagName = element.querySelector('h2');
//     console.log('Category:', titleByTagName.textContent);
//     const listByTagName = element.querySelector('ul')
//     console.log('Elements:', listByTagName.children.length);
// });

/*
  |==============================
  | Рішення 2
  |==============================
*/

const categoryItemByClassName = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemByClassName.length}`);

categoryItemByClassName.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
});
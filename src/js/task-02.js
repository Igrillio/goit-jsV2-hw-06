const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const serchIngrEl = document.querySelector("#ingredients")


const ingrListEl = ingredients.map(el => {

  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = el;
  return newEl
});
serchIngrEl.append(...ingrListEl)





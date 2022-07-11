function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const arrEl = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

arrEl.btn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = (arrEl.body.style.backgroundColor = getRandomHexColor());
  arrEl.color.textContent = ` ${randomColor}`;
}
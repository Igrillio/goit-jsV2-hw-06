let counterValue = 0;
const valueEl = document.querySelector('#value');
const buttonPlusEl = document.querySelector('button[data-action="increment"');
const buttonMinusEl = document.querySelector('button[data-action="decrement"]')


const buttonPlusTape = () => {
    counterValue += 1;
    valueEl.textContent = counterValue
};
buttonPlusEl.addEventListener("click",buttonPlusTape);

const buttonMinusTape = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
};
buttonMinusEl.addEventListener("click",buttonMinusTape);


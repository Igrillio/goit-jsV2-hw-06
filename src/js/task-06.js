const inputEl = document.querySelector('#validation-input')
const inputLengthEl = document.querySelector('input[data-length="6"]')
const focusInput = Number(inputLengthEl.dataset.length)

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === focusInput){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');  
    }
});
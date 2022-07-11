const inputEl = document.querySelector("#name-input")
const spanTitleEl = document.querySelector("#name-output")


inputEl.addEventListener('input', (event) => {
    spanTitleEl.textContent = inputEl.value
    if(event.target.value.length > 0){
        spanTitleEl.innerHTML = event.target.value
        return
    }
    spanTitleEl.append("Anonymous")
});
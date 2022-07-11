const allForm ={
inputEl: document.querySelector('#font-size-control'),
spanEl: document.querySelector('#text')
}




function changeFontSize(event){
allForm.spanEl.style.fontSize = event.currentTarget.value + 'px';

}


allForm.inputEl.addEventListener('input', changeFontSize)
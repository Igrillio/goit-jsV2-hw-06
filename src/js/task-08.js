const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', submit )


function submit(event) {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Пожалуйста, заполните все поля!");
    }
  
    console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }

  alert("Введите личную информацию в представленной форме, ниже :")



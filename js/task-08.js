'use strict'

const formRef = document.querySelector('.login-form');

const handleSubmitUserFormValue = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
        return alert('Заповніть будь-ласка всі поля!')
    } 

    const userDate = { email: email.value, password: password.value };
    console.log(userDate);

    event.currentTarget.reset();
}

formRef.addEventListener('submit', handleSubmitUserFormValue);

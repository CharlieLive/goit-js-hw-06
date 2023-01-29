const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, submitForm);

function submitForm(event) {
    event.preventDefault();

    const formData = {};
    for (const element of loginForm.elements) {
        if (element.name) {
            formData[element.name] = element.value;
        }
    }
    if (!formData.email || !formData.password) {
        alert(`You need too fill all fields`);
        return;
    }
    console.log(formData);
    loginForm.reset;
}
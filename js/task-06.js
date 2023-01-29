const input = document.querySelector("#validation-input");
input.addEventListener("blur", isValid);

function isValid() {
    const inputLength = input.value.length;
    const requiredLength = input.getAttribute("data-length");

    if (inputLength === Number(requiredLength)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}
function validateForm(formElement) {
    let form = formElement;
    Array.from(form.elements).forEach(element => {
        if (element && element.required && element.value === "") {
            element.style.border = "1px solid red";
        }else {
            element.style.border = "1px solid #e0e0e0";
        }
    
    })
}

export const Forms = {
    validateForm
}
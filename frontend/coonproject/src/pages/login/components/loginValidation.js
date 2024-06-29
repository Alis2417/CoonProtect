function Validation(values){
    let error = {}
    const name_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[z-zA-Z0-9]{8,}$/

    if(values.name === "") {
        error.name = "Введите имя"
    }
    else if(!name_pattern.test(values.name)) {
        error.name = "Имя не совпадает"
    }
    else {
        error.name = ""
    }

    if(values.password === "") {
        error.password = "Введите пароль"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Пароль не совпадает"
    }
    else {
        error.password = ""
    }
    return error;

}

export default Validation;

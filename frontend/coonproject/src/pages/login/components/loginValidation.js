function Validation(values){
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[z-zA-Z0-9]{8,}$/

    /*Name*/ 
    if(values.name === "") {
        error.name = "Введите имя"
    }
    else {
        error.name = ""
    }

    /*Password*/ 
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

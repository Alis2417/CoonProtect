function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[z-zA-Z0-9]{8,}$/
    const password_re_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[z-zA-Z0-9]{8,}$/

    /*Name*/ 
    if(values.name === "") {
        error.name = "Введите имя"
    }
    else {
        error.name = ""
    }
    /*Email*/ 
    if(values.email === "") {
        error.email = "Введите Email"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email не совпадает"
    }
    else {
        error.email = ""
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
    /*Repeat password*/ 
    if(values.password_re === "") {
        error.password_re = "Повторите пароль"
    }
    else if(!password_re_pattern.test(values.password_re)) {
        error.password_re = "Пароль не совпадает"
    }
    else {
        error.password_re = ""
    }
    return error;

}

export default Validation;
import './login-form.css';
import logo from '../../../imgs/LogoWithoutColor.png';
import Validation from './loginValidation.js';
import React, { useState } from "react";

function LoginForm() {
    const [values, setValues] = useState({
        name: '', 
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

    }


    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <img src={logo} className="login-form__logo"></img>
            <h2>Войдите в аккаунт</h2>
            <label>Введите логин и пароль в форме ниже</label>
            <div className='login-form__inputs'>
            <label>Имя</label>
            <input onChange={handleInput} name='name'></input>
            {errors.name && <span className='text-danger'> {errors.name} </span>}
            <br></br>
            <label>Пароль*</label>
            <input type={'password'} onChange={handleInput} name='password'></input>
            {errors.password && <span className='text-danger'> {errors.password} </span>}
            </div>
            <button type='submit' className='login-form__button-submit'>Войти</button>

            <label>
                Нет аккаунта? <a href="/register">Зарегистрироваться</a>
            </label>
        </form>
    );
}

export default LoginForm;

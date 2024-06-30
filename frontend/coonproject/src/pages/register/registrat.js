import './register.css';
import logo from '../../imgs/LogoWithoutColor.png';
import Validation from './registratValidation.js';
import React, { useState } from "react";
import axios from 'axios'

function RegisterPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_re: ''
})

const [errors, setErrors] = useState({})

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === "" && errors.password_re === "") {
        axios.post('http://localhost:8081/registrat', values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

}
    return (
        <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit} >
        <img src={logo} className="login-form__logo"/>
        <h2>Регистрация</h2>
        <label>Введите данные по форме ниже</label>
        <div className="register-form__inputs">
            <label>Имя пользователя*</label>
            <input name='name' onChange={handleInput}></input>
            {errors.name && <span className='text-danger'> {errors.name} </span>}
            <br></br>
            <label>Пароль*</label>
            <input type={'password'} name='password' onChange={handleInput}></input>
            {errors.password && <span className='text-danger'> {errors.password} </span>}
            <label>Повторите пароль*</label>
            <input type={'password'} name='password_re' onChange={handleInput}></input>
            {errors.password_re && <span className='text-danger'> {errors.password_re} </span>}
            <label>E-mail*</label>
            <input name='email' onChange={handleInput}></input>
            {errors.email && <span className='text-danger'> {errors.email} </span>}
            <br></br>
            
        </div>
        <p>Нажимая кнопку «Зарегистрироваться» вы даёте согласие на обработку своих персональных данных</p>
        <button type='submit' className="register-form__button-submit">Зарегистрироваться</button>
      </form>
      </div>
    );
  }
  
export default RegisterPage;

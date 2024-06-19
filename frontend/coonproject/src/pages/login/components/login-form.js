import './login-form.css';
import logo from '../../../imgs/LogoWithoutColor.png';

function LoginForm() {
    return (
        <form className="login-form">
            <img src={logo} className="login-form__logo"></img>
            <h2>Войдите в аккаунт</h2>
            <label>Введите логин и пароль в форме ниже</label>
            <div className='login-form__inputs'>
            <label>Имя</label>
            <input></input>
            <br></br>
            <label>Пароль*</label>
            <input type={'password'}></input>
            </div>
            <button className='login-form__button-submit'>Войти</button>

            <label>
                Нет аккаунта? <a href="/register">Зарегистрироваться</a>
            </label>
        </form>
    );
}

export default LoginForm;

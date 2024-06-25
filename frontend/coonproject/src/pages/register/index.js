import './register.css';
import logo from '../../imgs/LogoWithoutColor.png';

function RegisterPage() {
    return (
        <div class="register-page">
      <form className="register-form">
        <img src={logo} className="login-form__logo"/>
        <h2>Регистрация</h2>
        <label>Введите данные по форме ниже</label>
        <div class="register-form__inputs">
            <label>Имя пользователя*</label>
            <input></input>
            <br></br>
            <label>Пароль*</label>
            <input type={'password'}></input>
            <label>Повторите пароль*</label>
            <input type={'password'}></input>
            <label>E-mail*</label>
            <input></input>
            <br></br>
            
        </div>
        <p>Нажимая кнопку «Зарегистрироваться» вы даёте согласие на обработку своих персональных данных</p>
        <button class="register-form__button-submit">Зарегистрироваться</button>
      </form>
      </div>
    );
  }
  
export default RegisterPage;

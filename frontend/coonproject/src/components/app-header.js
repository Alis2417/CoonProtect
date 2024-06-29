import './app-header.css';
import logo from "../imgs/Logo.png"

function AppHeader() {
    return (
        <header class="app-header">
            <div class="app-header__menu">
                <a href="/">
                    <img  src={logo} alt="Logo" class="app-header__logo" />
                </a>
                <nav class="app-header__navigation">
                    <a href="courses">Курсы</a>

                    <a href="news">Новости</a>

                    <a href="#project-benefits">О проекте</a>

                    <a href="contacts">Контакты</a>
                </nav>
                <div class="app-header__auth">
                    <a href="login">Вход / Регистрация</a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;

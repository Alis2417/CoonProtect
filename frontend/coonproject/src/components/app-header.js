import './app-header.css';
import logo from "../imgs/Logo.png"

function AppHeader() {
    return (
        <header className="app-header">
            <div className="app-header__menu">
                <a href="/">
                    <img  src={logo} alt="Logo" className="app-header__logo" />
                </a>
                <nav className="app-header__navigation">
                    <a href="courses">Курсы</a>

                    <a href="#news-secure">Новости</a>

                    <a href="#project-benefits">О проекте</a>

                    <a href="#app-footer">Контакты</a>
                </nav>
                <div className="app-header__auth">
                    <a href="login">Вход / Регистрация</a>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;

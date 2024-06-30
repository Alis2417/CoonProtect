import './app-header.css';
import logo from "../imgs/Logo.png";



function AppHeader() {
    const isAuthenticated  = true; // Замените на реальное состояние авторизации
    const userName = "Иван Иванов"; // Замените на реальное имя пользователя

    return (
        <header className="app-header">
            <div className="app-header__menu">
                <a href="/">
                    <img src={logo} alt="Logo" className="app-header__logo" />
                </a>
                <nav className="app-header__navigation">
                    <a href="courses">Курсы</a>
                    <a href="#news-secure">Новости</a>
                    <a href="#project-benefits">О проекте</a>
                    <a href="#app-footer">Контакты</a>
                </nav>
                <div className="app-header__auth">
                    {isAuthenticated ? (
                        <div className="dropdown">
                            <button className="dropdown__toggle">
                                <img  alt="Avatar" className="dropdown__avatar" />
                                {userName}
                                <span className="dropdown__arrow">&#9662;</span>
                            </button>
                            <ul className="dropdown__menu">
                                <li><a href="/profile">Профиль</a></li>
                                <li><a href="/settings">Настройки</a></li>
                                <li><a href="/logout">Выйти</a></li>
                            </ul>
                        </div>
                    ) : (
                        <a href="login">Вход / Регистрация</a>
                    )}
                </div>
            </div>
        </header>
    );
}

export default AppHeader;

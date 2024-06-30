import './app-header.css';
import logo from "../imgs/Logo.png";
import Avatar from "../imgs/Leading.png";
import Grade from "../imgs/scroll-text.png";
import Settings from "../imgs/settings.png";
import Exit from "../imgs/exit.png";




function AppHeader() {
    const isAuthenticated  = true; // Замените на реальное состояние авторизации
    const userName = "Семенова Кристина"; // Замените на реальное имя пользователя

    return (
        <header className="app-header">
            <div className="app-header__menu">
                <a href="/">
                    <img src={logo} alt="Logo" className="app-header__logo" />
                </a>
                <nav className="app-header__navigation">
                    <a href="about">Курсы</a>
                    <a href="#news-secure">Новости</a>
                    <a href="#project-benefits">О проекте</a>
                    <a href="#app-footer">Контакты</a>
                </nav>
                <div className="app-header__auth">
                    {isAuthenticated ? (
                        <div className="dropdown">
                            <button className="dropdown__toggle">
                                <img src={Avatar} alt="Avatar" className="dropdown__avatar" />
                                {userName}
                                <span className="dropdown__arrow">&#9662;</span>
                            </button>
                            <ul className="dropdown__menu">
                                <li><img src={Grade} alt="Grade" className="dropdown__avatar" /><a href="/courses">Успеваемость</a></li>
                                <li><img src={Settings} alt="Settings" className="dropdown__avatar" /><a href="/profile">Настройки</a></li>
                                <li><img src={Exit} alt="Exit" className="dropdown__avatar" /><a href="/">Выйти</a></li>
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

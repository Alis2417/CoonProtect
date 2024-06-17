import "./app-header.css";

function AppHeader() {
  return (
    <header class="app-header">
      <a href="#">
        <img src="icons/Logo.png" alt="Logo" class="app-header__logo" />
      </a>
      <ul class="app-header__menu">
        <li>
          <a href="#">Курсы</a>
        </li>
        <li>
          <a href="#">Новости</a>
        </li>
        <li>
          <a href="#">О проекте</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
      <div class="app-header__auth">
        <a href="#">Вход / Регистрация</a>
      </div>
    </header>
  );
}

export default AppHeader;

import './app-footer.css';

function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="footer-content">
            <h2>Не пропусти ничего важного в сфере ИБ</h2>
            <p>
            Чтобы не пропускать ничего важного ты можешь зарегистрироваться и конечно же пройти курсы, которые тебе помогут правильно подойти к безопасности своих конфиденциальных данных и уберечь их от мошенников
            </p>
            <button className="register-button">Зарегистрироваться</button>
        </div>
        <div className="footer-bottom">
        
            <span>© FlyEasy, 2024</span>
            <a href="#">Политика конфиденциальности</a>
        </div>
        </footer>
    );
}

export default AppFooter;

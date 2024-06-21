import './app-footer.css';

function AppFooter() {
    return (
        <footer className="app-footer">
            <div className="app-footer__recomendation">
                <h2>Не пропусти ничего важного в сфере ИБ</h2>
                <div>
                    Не пропусти ничего важного в сфере ИБ Чтобы не пропускать ничего важного ты можешь
                    зарегистрироваться и конечно же пройти курсы, которые тебе помогут правильно подойти к безопасности
                    своих конфиденциальных данных и уберечь их от мошенников Выбрать курс
                </div>
            </div>
            <div className="app-footer__bottom-panel">
                <div>© CoonProtect,2024</div>
                <div>Политика конфиденциальности</div>
            </div>
        </footer>
    );
}

export default AppFooter;

import './style.css';
import Picture from '../../imgs/Picture.png'
import Thumbs from '../../imgs/thumbs-up.png'
import Heart from '../../imgs/heart.png'
import List from '../../imgs/list-checks.png'

function MainPage() {
  return (<>
    <div className="main-page">
      <div class="main-page_content">
      <div class="main-page_container">
      <h1>Безопасность данных в твоих руках</h1> 
      <p>Пройди бесплатный курс по информационной безопасности и защити свои данные от мошенников</p>
      </div>
      </div>
    </div>
    <div className="features-section">
      <div class="text-content">
        <h2>Повысь свой уровень знаний в ИБ</h2>
        <ul>
          <li>выбирай один из множества бесплатных курсов</li>
          <li>получай актуальные прикладные знания</li>
          <li>повышай свой уровень и применяй на практике</li>
        </ul>
        <div class="buttons">
          <button class="primary-btn">Пройти курс</button>
          <button class="secondary-btn">Зарегистрироваться</button>
        </div>
      </div>
      <div class="image-content">
      <img src={Picture} alt="Cyber Security Course"/>
      </div>
    </div>
    <div class="project-benefits">
      <h1>О проекте и  его преимуществах</h1>
      <p>Проект создан в целях повышения знаний в области информационной безопасности и направлен на минимизацию кибератак на пользователей сети Интернет</p>
      <div class="benefits">
      <div class="benefit">
        <img src={Thumbs} alt="Thumbs-up" />
        <h2>Актуальные знания в сфере ИБ в одном месте</h2>
        <p>В проекте представлены только свежие новости в сфере ИБ с постоянным обновлением базы знаний и курсов под новые реалии представляемой сферы</p>
      </div>
      <div class="benefit">
        <img src={Heart} alt="Heart"/>
        <h2>Комфортное обучение без ограничений</h2>
        <p>Бесплатные курсы позволят получить необходимые знания в области ИБ, а понятный интерфейс сделает обучение приятным</p>
      </div>
      <div class="benefit">
        <img src={List} alt="List"/>
        <h2>Понятный план обучения</h2>
        <p>Полученные знания будет легко применять на практике — ты сможешь грамотно  противостоять кибератакам мошенников</p>
      </div>
      </div>
    </div>

    </>
  );
}


export default MainPage;

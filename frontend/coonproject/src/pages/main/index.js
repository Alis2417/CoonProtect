import './style.css';
import Picture from '../../imgs/Picture.png'
import Thumbs from '../../imgs/thumbs-up.png'
import Heart from '../../imgs/heart.png'
import List from '../../imgs/list-checks.png'
import Basic from '../../imgs/basic.png'
import Gosusligi from '../../imgs/gosusligi.png'
import Fish from '../../imgs/fish.png'
import Baner1 from '../../imgs/Baner1.png'
import Baner2 from '../../imgs/Baner2.png'
import Baner3 from '../../imgs/Baner3.png'
import Button from '../../imgs/Button.png'

function MainPage() {
  return (<>
    <div className="main-page">
      <div className="main-page_content">
      <div className="main-page_container">
      <h1>Безопасность данных в твоих руках</h1> 
      <p className="explane">Пройди бесплатный курс по информационной безопасности и защити свои данные от мошенников</p>
      </div>
      </div>
    </div>
    <div className="features-section">
      <div className="text-content">
        <h2>Повысь свой уровень знаний в ИБ</h2>
        <ul>
          <li>выбирай один из множества бесплатных курсов</li>
          <li>получай актуальные прикладные знания</li>
          <li>повышай свой уровень и применяй на практике</li>
        </ul>
        <div className="buttons">
          <button className="primary-btn"><a href="about">Пройти курс</a></button>
          <button className="secondary-btn"> <a href="/register">Зарегистрироваться</a></button>
        </div>
      </div>
      <div className="image-content">
      <img src={Picture} alt="Cyber Security Course"/>
      </div>
    </div>

    <div className="products">

    <div className="container">
      <div className="banner banner1">
      <img src={Baner1} alt="Курсы ИБ"/>
      
      </div>
      <div className="banner banner2">
      <img src={Baner2} alt="Социальная инженерия"/>
      
      </div>
      <div className="banner banner3">
      <img src={Baner3} alt="IoT Security"/>
      
      </div>
      <div className="button">
      <img src={Button} alt="Подобрать курс"/>
      </div>

      </div>

      </div>
      
    <div className="project-benefits" id="project-benefits">
      <h1>О проекте и  его преимуществах</h1>
      <p>Проект создан в целях повышения знаний в области информационной безопасности и направлен на минимизацию кибератак на пользователей сети Интернет</p>
      <div className="benefits">
      <div className="benefit">
        <img src={Thumbs} alt="Thumbs-up" />
        <h2>Актуальные знания в сфере ИБ в одном месте</h2>
        <p>В проекте представлены только свежие новости в сфере ИБ с постоянным обновлением базы знаний и курсов под новые реалии представляемой сферы</p>
      </div>
      <div className="benefit">
        <img src={Heart} alt="Heart"/>
        <h2>Комфортное обучение без ограничений</h2>
        <p>Бесплатные курсы позволят получить необходимые знания в области ИБ, а понятный интерфейс сделает обучение приятным</p>
      </div>
      <div className="benefit">
        <img src={List} alt="List"/>
        <h2>Понятный план обучения</h2>
        <p>Полученные знания будет легко применять на практике — ты сможешь грамотно  противостоять кибератакам мошенников</p>
      </div>
      </div>
    </div>


    <div className="news-secure" id="news-secure">
      <h1>Новости в сфере ИБ</h1>
      <div className="news-feeds">
        <div className="news-feed">
        <img src={Basic} alt="Basic" />
        <div className="news-feed-time">
          <h2>02 мая 2024 - 20:52</h2>
        </div>
        <p className="inf">С днём рождения, BASIC! Языку программирования исполнилось 60 лет</p>
        </div>
        <div className="news-feed">
        <img src={Gosusligi} alt="Gosuslugi" />
        <div className="news-feed-time">
          <h2>03 мая 2024 - 18:23</h2>
        </div>
        <p className="inf">На Госуслугах запустят пилот платформы согласий для финрынка</p>
        </div>
        <div className="news-feed">
        <img src={Fish} alt="Fish" />
        <div className="news-feed-time">
          <h2>27 апреля 2024 - 19:59</h2>
        </div>
        <p className="inf">Фишеры завлекают пособием на Госуслугах и подсовывают Android-трояна</p>
        </div>
      </div>
      <button className="more-news">Все новости</button>
    </div>

    </>
  );
}


export default MainPage;

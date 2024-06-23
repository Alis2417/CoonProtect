import './style.css';
import Picture from '../../imgs/Picture.png'

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
    </>
  );
}


export default MainPage;

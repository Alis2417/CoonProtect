import './profile-card.css'
import Profile from "../../../imgs/profile.png";

function ProfileCard() {
    return (
      
            <div className="profile-card">
                <div className="profile-card__short-info">
                  <img src={Profile} alt="Profile" className="profile-card__logo"></img>
                  <div class="profile-info">
                <p>Кристина</p>
                <p>ID: 1797364821</p>
            </div>
                </div>
                <div className="profile-card__form">

                  <div className="form-group">

                    <div class="form-container">

                    <div class="form-item">
                  <label>Фамилия</label>
                  <input name='surname-person'></input>
                  </div>
                  <div class="form-item">
                  <label>Имя</label>
                  <input name='name-person'></input>
                  </div>
                  <div class="form-item">
                  <label>Отчество</label>
                  <input name='patronymic'></input>
                  </div>

                    </div>

                  <div class="form-container">

                  <div class="form-item">
                  <label>Email</label>
                  <input name='email'></input>
                  </div>
                  <div class="form-item">
                  <label>Номер телефона</label>
                  <input name='phone'></input>
                  </div>
                  <div class="form-item">
                  <label>Пароль</label>
                  <input name='password'></input>
                  <a href="#" class="change-password">Изменить пароль</a>
                  </div>

                  <div className="button-clic" type="submit">
          <button className="secondary">Сохранить</button>
        </div>

                  </div>


                  </div>
                  

                </div>
            </div>
    );
}

export default ProfileCard;

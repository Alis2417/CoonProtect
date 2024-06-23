import React from 'react';
import './course-card.css';

function CourseCard({ title, text, percent, disable = false, inProccess = false }) {
    return (
        <div className={`course-card ${disable ? 'disabled' : ''} ${inProccess ? 'course-card--inProgress' : ''}`}>
            <div className="course-card__header">{title}</div>
            <div className="course-card__content">
                <div>{text}</div>
            </div>
            <div className="course-card__footer">
                <div className="course-card__type-education">
                    <div style={{ width: '49.9%' }}>для всех пользователей</div>
                    <div>онлайн-обучение</div>
                </div>
                <div>
                    <button className={`course-card__button ${inProccess ? 'course-card__button--inProgress' : ''}`}>
                        {inProccess ? 'Продолжить' : 'Подробнее'}
                    </button>
                </div>

                {inProccess && (
                    <>
                        <div>Пройдено {percent}% из 100</div>
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{ width: `${percent}%` }}></div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CourseCard;

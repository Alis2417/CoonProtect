import React from 'react';
import './course-card.css';
import { IconAdd } from "../Icons";


function CourseCard(props) {
    const {
      title,
      progress,
      type,
      visibility,
      description,
      inProccess = false,
      disabled,
      isTemplate,
      templateText,
      onClick,
      onAddCourse,
    } = props

    if (isTemplate) {
      return (
        <div className='course-card course-card__template' onClick={onAddCourse}>
          <IconAdd />
          <span>{templateText}</span>
        </div>
      )
    }
    return (
      <div className={`course-card ${disabled ? 'disabled' : ''} ${inProccess ? 'course-card--inProgress' : ''}`}>
        <div className="course-card__header">{title}</div>
        <div className="course-card__wrapper">
          <div className="course-card__content">
            <div>{description}</div>
          </div>
          <div className="course-card__footer">
            <div className="course-card__type-education">
              <div>{visibility}</div>
              <div>{type}</div>
            </div>
            <div>
              <button className={`course-card__button ${inProccess ? 'course-card__button--inProgress' : ''}`} onClick={onClick}>
                {inProccess ? 'Продолжить' : 'Подробнее'}
              </button>
            </div>
            {inProccess && (
              <div className="course-card__progress">
                <div>Пройдено {progress}% из 100</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{width: `${progress}%`}}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default CourseCard;

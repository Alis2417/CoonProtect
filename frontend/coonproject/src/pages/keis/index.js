import React, { useState, useEffect } from 'react';
import './keis-page.style.css';

// Компонент для рендеринга урока
function LessonPanel({ htmlContent, onComplete }) {
    return (
        <div className="lesson-panel">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            <button onClick={onComplete}>Mark Lesson as Completed</button>
        </div>
    );
}

// Компонент для рендеринга теста
function TestingPanel({ testData, onComplete }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика обработки отправки формы
        console.log('Test submitted');
        onComplete();
    };

    return (
        <div className="testing-panel">
            <form onSubmit={handleSubmit}>
                <div dangerouslySetInnerHTML={{ __html: testData }}></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// Основной компонент курса
function KeisPage() {
    const data = courseData;
    const [completedLessons, setCompletedLessons] = useState([]);
    const [currentLesson, setCurrentLesson] = useState(null);

    // Загрузка прогресса из localStorage
    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem('courseProgress'));
        if (savedProgress) {
            setCompletedLessons(savedProgress.completedLessons || []);
            setCurrentLesson(savedProgress.currentLesson || null);
        }
    }, []);

    // Сохранение прогресса в localStorage
    useEffect(() => {
        const progress = { completedLessons, currentLesson };
        localStorage.setItem('courseProgress', JSON.stringify(progress));
    }, [completedLessons, currentLesson]);

    const markAsCompleted = (id) => {
        if (!completedLessons.includes(id)) {
            setCompletedLessons([...completedLessons, id]);
        }
    };

    const handleLessonClick = (id) => {
        setCurrentLesson(id);
    };

    const totalLessons = data.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedPercentage = Math.round((completedLessons.length / totalLessons) * 100);

    const currentLessonData = data.modules
        .flatMap((module) => module.lessons)
        .find((lesson) => lesson.id === currentLesson);

    return (
        <div className="course">
            <p>Progress: {completedPercentage}%</p>
            <div className="course-content">
                <div className="sidebar">
                    <h1>{data.title}</h1>
                    {data.modules.map((module) => (
                        <li key={module.id} className="module">
                            <h2>{module.title}</h2>
                            {module.lessons.map((lesson) => (
                                <div key={lesson.id} className="lesson-or-test">
                                    <h3 onClick={() => handleLessonClick(lesson.id)} style={{ cursor: 'pointer' }}>
                                        {lesson.title} {completedLessons.includes(lesson.id) && ' (Completed)'}
                                    </h3>
                                </div>
                            ))}
                        </li>
                    ))}
                </div>
                <div className="main-content">
                    {currentLessonData ? (
                        currentLessonData.type === 'lesson' ? (
                            <LessonPanel
                                htmlContent={currentLessonData.data}
                                onComplete={() => markAsCompleted(currentLessonData.id)}
                            />
                        ) : (
                            <TestingPanel
                                testData={currentLessonData.data}
                                onComplete={() => markAsCompleted(currentLessonData.id)}
                            />
                        )
                    ) : (
                        <p>Please select a lesson or test from the left.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

// Пример данных курса
const courseData = {
    id: 0,
    title: 'Программирование на JavaScript',
    modules: [
        {
            id: 1,
            title: 'Основы JavaScript',
            lessons: [
                {
                    id: 0,
                    title: 'Введение в JavaScript',
                    type: 'lesson',
                    data: '<h3>Введение в JavaScript</h3><p>JavaScript - это язык программирования, используемый для создания динамических веб-страниц.</p>',
                },
                {
                    id: 1,
                    title: 'Переменные и типы данных',
                    type: 'lesson',
                    data: '<h3>Переменные и типы данных</h3><p>В JavaScript есть несколько типов данных: строки, числа, объекты и др.</p>',
                },
                {
                    id: 2,
                    title: 'Контрольные вопросы по основам',
                    type: 'test',
                    data: '<label>Что такое переменная в JavaScript? <input type="text" name="question1" /></label><br/><label>Какие типы данных вы знаете? <input type="text" name="question2" /></label>',
                },
            ],
        },
        {
            id: 2,
            title: 'Функции и объекты',
            lessons: [
                {
                    id: 3,
                    title: 'Функции в JavaScript',
                    type: 'lesson',
                    data: '<h3>Функции в JavaScript</h3><p>Функции позволяют выполнять блоки кода многократно, с возможностью передачи аргументов.</p>',
                },
                {
                    id: 4,
                    title: 'Объекты и массивы',
                    type: 'lesson',
                    data: '<h3>Объекты и массивы</h3><p>Объекты и массивы - это структуры данных, используемые для хранения коллекций значений.</p>',
                },
                {
                    id: 5,
                    title: 'Практика по функциям и объектам',
                    type: 'test',
                    data: '<label>Напишите функцию, которая принимает два числа и возвращает их сумму. <input type="text" name="question1" /></label><br/><label>Как создать объект в JavaScript? <input type="text" name="question2" /></label>',
                },
            ],
        },
        {
            id: 3,
            title: 'Продвинутые темы',
            lessons: [
                {
                    id: 6,
                    title: 'Асинхронное программирование',
                    type: 'lesson',
                    data: '<h3>Асинхронное программирование</h3><p>Асинхронное программирование позволяет выполнять операции без блокировки основного потока выполнения.</p>',
                },
                {
                    id: 7,
                    title: 'Работа с API',
                    type: 'lesson',
                    data: '<h3>Работа с API</h3><p>API (Application Programming Interface) позволяет взаимодействовать с другими приложениями и сервисами.</p>',
                },
                {
                    id: 8,
                    title: 'Контрольные вопросы по продвинутым темам',
                    type: 'test',
                    data: '<label>Что такое промисы в JavaScript? <input type="text" name="question1" /></label><br/><label>Как вызвать API с помощью fetch? <input type="text" name="question2" /></label>',
                },
            ],
        },
    ],
};

export default KeisPage;

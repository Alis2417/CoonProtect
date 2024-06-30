import React, { useState, useEffect } from 'react';
import TestingPanel from './components/createTestingPanel';
import './keis-page.style.css';

// Компонент для рендеринга урока
function LessonPanel({ htmlContent, onComplete }) {
    return (
        <div className="lesson-panel">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            <button onClick={onComplete}>Пометить как пройденое</button>
        </div>
    );
}



// Основной компонент курса
function KeisPage() {
    const data = courseData;
    const [completedLessons, setCompletedLessons] = useState([]);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [testResults, setTestResults] = useState({});

    // Загрузка прогресса из localStorage
    useEffect(() => {
        const savedProgress = JSON.parse(localStorage.getItem('courseProgress' + data.id));
        if (savedProgress) {
            setCompletedLessons(savedProgress.completedLessons || []);
            setCurrentLesson(savedProgress.currentLesson || null);
            setTestResults(savedProgress.testResults || {});
        }
    }, []);

    // Сохранение прогресса в localStorage
    useEffect(() => {
        // Проверяем, что хотя бы одно из полей (completedLessons, currentLesson, testResults) не пустое
        if (completedLessons.length > 0 || currentLesson !== null || Object.keys(testResults).length > 0) {
            const progress = { completedLessons, currentLesson, testResults };
            localStorage.setItem('courseProgress' + data.id, JSON.stringify(progress));
        }
    }, [completedLessons, currentLesson, testResults]);

    const markAsCompleted = (id) => {
        if (!completedLessons.includes(id)) {
            setCompletedLessons([...completedLessons, id]);
        }
    };

    const handleLessonClick = (id) => {
        setCurrentLesson(id);
    };

    const handleCheckAnswers = (answers) => {
        const currentLessonData = data.modules
            .flatMap((module) => module.lessons)
            .find((lesson) => lesson.id === currentLesson);

        if (currentLessonData && currentLessonData.type === 'test') {
            // Здесь можно добавить логику проверки ответов
            const correctAnswers = {
                question1: 'Правильный ответ',
                question2: 'Правильный ответ',
            };

            let results = {};
            for (const [key, value] of Object.entries(answers)) {
                results[key] = value === correctAnswers[key];
            }

            setTestResults((prevResults) => ({
                ...prevResults,
                [currentLesson]: results,
            }));
        }
    };

    const totalLessons = data.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedPercentage = Math.round((completedLessons.length / totalLessons) * 100);

    const currentLessonData = data.modules
        .flatMap((module) => module.lessons)
        .find((lesson) => lesson.id === currentLesson);

    return (
        <div className="keis-page">
            <div className="course-content">
                <div className="sidebar">
                    <h1>{data.title}</h1>
                    <p>Progress: {completedPercentage}%</p>
                    {data.modules.map((module) => (
                        <div key={module.id} className="module">
                            <h2>• {module.title}</h2>
                            {module.lessons.map((lesson) => (
                                <div key={lesson.id} className="lesson-or-test">
                                    <h3 onClick={() => handleLessonClick(lesson.id)} style={{ cursor: 'pointer' }}>
                                        {lesson.title} {completedLessons.includes(lesson.id) && ' (Пройдено)'}
                                    </h3>
                                </div>
                            ))}
                        </div>
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
                                title={currentLessonData.title}
                                testData={currentLessonData.questions}
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
    title: 'Социальная инженерия',
    modules: [
        {
            id: 1,
            title: 'Вводная часть',
            lessons: [
                {
                    id: 20,
                    title: 'Вводная часть',
                    type: 'lesson',
                    data: '<h3>Обзор программы курса</h3><p>Добро пожаловать на курс по социальной инженерии, на данном курсе будут разобраны основные моменты данной атаки, а также все её виды с подробными примерами того, как мошенник может обмануть тебя. </p>',
                },
                {
                    id: 1,
                    title: 'Переменные и типы данных',
                    type: 'lesson',
                    data: '<h3>Переменные и типы данных</h3><p>В JavaScript есть несколько типов данных: строки, числа, объекты и др.</p>',
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
                    title: 'Контрольные вопросы по социальной инженерии',
                    type: 'test',
                    questions: [
                        {
                            question: 'Что такое социальная инженерия?',
                            options: [
                                'Это метод атак, который направлен на разглашение конфиденциальной информации путем психологического манипулирования пользователем',
                                'Это методы защиты, направленные на предотвращение от несанкционированного вмешательства мошенников запоминает своё лексическое окружение',
                                'Это методы, основанные на взаимодействии всех слоев населения их привычек и других признаков, для поддержания баланса и качества обслуживания в крупных корпорациях циклов в JavaScript'
                            ],
                            correctAnswer: 'Это метод атак, который направлен на разглашение конфиденциальной информации путем психологического манипулирования пользователем'
                        },
                        {
                            question: 'Представьте, что вы хотите взять кредит в долг 100 000 рублей. Первый банк вам предложил деньги на условиях, вы вернете банку через год 125 000, второй же предложил вам вернуть 100 000 рублей под 20% от суммы долга. Какой из предложений выгоднее?',
                            options: [
                                'Первое',
                                'Второе',
                                'Одинаковы'
                            ],
                            correctAnswer: 'Второе'
                        }
                    ]
                
                },
            ],
        },
    ],
};

export default KeisPage;

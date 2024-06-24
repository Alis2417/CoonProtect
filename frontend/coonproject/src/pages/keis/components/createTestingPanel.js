import { useState } from 'react';
import "./createTestingPanel.css"

function TestingPanel({ testData,title, onComplete }) {
    const [answers, setAnswers] = useState({});

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: checked ? value : undefined
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = {};
        testData.forEach((question, index) => {
            const userAnswer = answers[`question${index + 1}`];
            results[`question${index + 1}`] = userAnswer === question.correctAnswer;
        });
        // Вызываем onComplete только если все ответы правильные (можно добавить дополнительные условия)
        if (Object.values(results).every((result) => result === true)) {
            onComplete();
        }
        else{
            alert("Один из ответов не правильный");
        }
    };

    return (
        <div className="testing-panel">
            <form onSubmit={handleSubmit}>
                <h2>{title}</h2>
                {testData.map((question, index) => (
                    <div className='question-container' key={index}>
                        <div>{index}. {question.question}</div>
                        {question.options.map((option, optionIndex) => (
                            <label key={optionIndex}>
                                <input
                                    type="radio"
                                    name={`question${index + 1}`}
                                    value={option}
                                    onChange={handleInputChange}
                                    checked={answers[`question${index + 1}`] === option}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit">Подтвердить</button>
            </form>
        </div>
    );
}

export default TestingPanel;

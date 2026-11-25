import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import questions from '../data/questions';

function Quiz() {

    // Returns an object containing URL parameters   Example: { subject: "java" }

    // const params = useParams();   // console.log(params); // Output: { subject: "java" }

    // Object destructuring: Extracting the subject value from params




    const { subject } = useParams();    // console.log("Subject Name is:", subject);  Output: Subject Name is: java

    const [selectedLevel, setSelectedLevel] = useState(null); // for Question Level - Beginner / Intermediate / Advance

    const [quizStarted, setQuizStarted] = useState(false);

    const [selectedAnswer, setSelectedAnswer] = useState({});

    const [showResult, setShowResult] = useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    /* Now Filetering the Questions */

    const filterQuestions = questions.filter(
        (q) =>
            q.subject === subject && q.difficulty === selectedLevel
    );

    const currentQuestion = filterQuestions[currentQuestionIndex];

    const score = filterQuestions.filter(
        (q) => selectedAnswer[q.id] === q.answer
    ).length;

    return (
        <div>

            <h1>{subject.toUpperCase()} MCQ Test</h1>

            <h2>Select Difficulty Level</h2>

            <div className="difficulty-container">

                <button onClick={() => setSelectedLevel("Beginner")} >
                    Beginner</button>

                <button onClick={() => setSelectedLevel("Intermediate")}>
                    Intermediate</button>

                <button onClick={() => setSelectedLevel("Advanced")}>
                    Advanced</button>

            </div>

            { /*   Conditional Rendring  */}

            {selectedLevel && (
                <div className="start-quiz-container">
                    <h3 className="selected-level">
                        Selected Level: {selectedLevel}
                    </h3>

                    <button className="start-quiz-btn"
                        onClick={() => setQuizStarted(true)}>
                        Start Quiz
                    </button>
                </div>
            )}


            {/* Display Questions After Clicking Start Quiz */}

            {quizStarted && (
                <div className="quiz-container">
                    <h2>Quiz Started!</h2>

                    {currentQuestion && (
                        <table className="quiz-table">
                            <thead>
                                <tr>
                                    <th>{currentQuestion.question}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentQuestion.options.map((option, index) => (
                                    <tr key={index}>
                                        <td>
                                            <label className="option-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestion.id}`}
                                                    value={option}
                                                    checked={selectedAnswer[currentQuestion.id] === option}
                                                    onChange={() => {
                                                        setSelectedAnswer({
                                                            ...selectedAnswer,
                                                            [currentQuestion.id]: option
                                                        });
                                                    }}
                                                />
                                                {option}
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Next Button */}
                    {currentQuestionIndex < filterQuestions.length - 1 && (
                        <button
                            className="submit-quiz-btn"
                            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                        >
                            Next
                        </button>
                    )}

                    {/* Submit Button on Last Question */}
                    {currentQuestionIndex === filterQuestions.length - 1 && (
                        <button
                            className="submit-quiz-btn"
                            onClick={() => setShowResult(true)}
                        >
                            Submit Quiz
                        </button>
                    )}

                    {/* Result */}
                    {showResult && (
                        <div>
                            <h2>Quiz Result</h2>
                            <h3>Your Score: {score} / {filterQuestions.length}</h3>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}

export default Quiz



// ?: Ternary Conditonal Rendering 
/* 
{selectedLevel ? (
    <h3>Selected Level: {selectedLevel}</h3>
) : null}

*/
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



    /* Now Filetering the Questions */

    const filterQuestions = questions.filter(
        (q) =>
            q.subject === subject && q.difficulty === selectedLevel
    );


    return (
        <div>

            <h1>{subject.toUpperCase()} MCQ Test</h1>
            <p>Welcome to the MCQ Practice Test!</p>

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

                    {filterQuestions.map((q) => (
                        <div key={q.id}>
                            <h3>{q.question}</h3>

                            {q.options.map((option, index) => (
                                <p key={index}>{option}</p>
                            ))}
                        </div>
                    ))}
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
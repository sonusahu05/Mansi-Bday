import React, { useState } from 'react';
import styles from './LandingPage.module.css'; // Correctly import the CSS module
import Collage from '../collage/Collage';

const LandingPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showCollage, setShowCollage] = useState(false);
    const [showIntro, setShowIntro] = useState(true); // show intro screen until Start Quiz is clicked

    const questions = [
        {
            question: "What is the medical term for removing blood from the body?",
            options: ["Blood withdrawal", "Phlebotomy", "Venipuncture", "Dialysis"],
            answer: "Blood withdrawal",
        },
        {
            question: "Rate yourself as a friend out of 10.",
            options: ["1", "5", "10", "100"],
            answer: "100",
        },
        {
            question: "How many hours of sleep is necessary for a human being according to Dr. Mansi?",
            options: ["0", "6", "8", "10"],
            answer: "0",
        },
    ];

    const handleAnswerSubmit = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            if (currentQuestionIndex === questions.length - 1) {
                setShowCollage(true);
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        } else {
            setShowErrorModal(true);
        }
    };

    const closeModal = () => {
        setShowErrorModal(false);
    };

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setShowCollage(false);
        setShowIntro(false);
    };

    return (
        <div className={styles.container}>
            {showIntro && !showCollage && (
                <div className={styles.intro}>
                    <h1>Happy Birthday Dr. Mansi</h1>
                    <p>Crack the test to open the surprise!</p>
                    <button onClick={startQuiz} className={styles.startButton}>Start Quiz</button>
                </div>
            )}

            {!showIntro && !showCollage && (
                <div className={styles.quiz}>
                    <p>{questions[currentQuestionIndex].question}</p>
                    {questions[currentQuestionIndex].options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => handleAnswerSubmit(option)}
                            className={styles.optionButton}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}

            {showErrorModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Oops!</h2>
                        <p>Incorrect answer. Please try again.</p>
                        <button onClick={closeModal} className={styles.closeButton}>Close</button>
                    </div>
                </div>
            )}

            {showCollage && <Collage />}
        </div>
    );
};

export default LandingPage;
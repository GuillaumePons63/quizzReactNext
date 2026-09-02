"use client";

import React, { useState } from "react";
import Link from "next/link";
import ChoiceNumber from "./component/choiceNumber";
import ShowQuestion from "./component/showQuestion";
import NumberQuestion from "./component/numberQuestion";
import { questions } from "./component/questions/general";

export default function Start() {
    const [numberQuestions, setNumberQuestions] = useState(5);
    const [quizz, setQuizz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const setNewQuizz = () => {
        // Mélange aléatoire sans remise (garantit l'absence de doublons)
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        const count = Math.min(numberQuestions, questions.length);
        const selectedQuestions = shuffled.slice(0, count);

        setQuizz(selectedQuestions);
        setCurrentQuestion(0);
        setUserAnswers({});
        setIsFinished(false);
    };

    const handleAnswer = (answer, isCorrect) => {
        setUserAnswers((prev) => ({
            ...prev,
            [currentQuestion]: { answer, isCorrect },
        }));
    };

    const handleRestart = () => {
        setQuizz([]);
        setCurrentQuestion(0);
        setUserAnswers({});
        setIsFinished(false);
    };

    const score = Object.values(userAnswers).filter((a) => a.isCorrect).length;
    const answeredCount = Object.keys(userAnswers).length;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gray-50 dark:bg-gray-900">
            {quizz.length === 0 ? (
                <ChoiceNumber
                    numberQuestions={numberQuestions}
                    setNumberQuestions={setNumberQuestions}
                    onTrigger={setNewQuizz}
                    maxQuestions={questions.length}
                />
            ) : isFinished ? (
                <div className="animate__animated animate__zoomIn animate__faster w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-center flex flex-col items-center border border-gray-100 dark:border-gray-700">
                    <span className="text-6xl mb-2 block animate__animated animate__tada animate__delay-1s">
                        {score >= quizz.length / 2 ? "🏆" : "💪"}
                    </span>
                    <h2 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">
                        Quizz Terminé !
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg">
                        {score === quizz.length
                            ? "Félicitations ! Un score parfait !"
                            : score >= quizz.length / 2
                            ? "Bien joué ! Vous avez de solides connaissances !"
                            : "Courage ! Entraînez-vous pour faire encore mieux !"}
                    </p>

                    <div className="animate__animated animate__heartBeat animate__delay-1s my-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800 w-full max-w-sm shadow-inner">
                        <div className="text-5xl font-black text-blue-600 dark:text-blue-400">
                            {score} / {quizz.length}
                        </div>
                        <div className="text-base font-semibold text-gray-700 dark:text-gray-200 mt-2">
                            {Math.round((score / quizz.length) * 100)}% de bonnes réponses
                        </div>
                    </div>

                    <div className="w-full text-left mt-6 mb-6">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-3">
                            Récapitulatif des questions :
                        </h3>
                        <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto pr-2">
                            {quizz.map((q, idx) => {
                                const ans = userAnswers[idx];
                                const isAnsCorrect = ans && ans.isCorrect;
                                return (
                                    <div
                                        key={idx}
                                        className={`p-3.5 rounded-xl border-2 text-sm flex items-start justify-between gap-3 transition-all ${
                                            isAnsCorrect
                                                ? "bg-green-50 border-green-300 text-green-950 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200"
                                                : "bg-red-50 border-red-300 text-red-950 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200"
                                        }`}
                                    >
                                        <div>
                                            <span className="font-bold mr-2">Q{idx + 1}.</span>
                                            <span>{q.question}</span>
                                        </div>
                                        <span className="font-extrabold text-base flex-shrink-0">
                                            {isAnsCorrect ? "✓" : "✗"}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center mt-2">
                        <button
                            onClick={handleRestart}
                            className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Recommencer un quizz
                        </button>
                        <Link
                            href="/"
                            className="px-7 py-3.5 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <ShowQuestion
                        key={currentQuestion}
                        question={quizz[currentQuestion]}
                        questionNumber={currentQuestion + 1}
                        totalQuestions={quizz.length}
                        savedAnswer={userAnswers[currentQuestion]}
                        onAnswer={handleAnswer}
                    />

                    <NumberQuestion
                        setNumber={setCurrentQuestion}
                        numberTotalQuestions={quizz.length}
                        currentNumber={currentQuestion}
                        onFinish={() => setIsFinished(true)}
                        isCurrentAnswered={!!userAnswers[currentQuestion]}
                    />
                </>
            )}
        </main>
    );
}



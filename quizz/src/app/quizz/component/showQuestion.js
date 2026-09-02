import React, { useState } from "react";

export default function ShowQuestion({
    question,
    questionNumber,
    totalQuestions,
    savedAnswer = null,
    onAnswer,
}) {
    const [selectedAnswer, setSelectedAnswer] = useState(savedAnswer ? savedAnswer.answer : "");
    const [isSubmitted, setIsSubmitted] = useState(!!savedAnswer);

    const isCorrect = savedAnswer ? savedAnswer.isCorrect : selectedAnswer === question.correct;

    const handleValidate = () => {
        if (!selectedAnswer) return;
        const correct = selectedAnswer === question.correct;
        setIsSubmitted(true);
        if (onAnswer) {
            onAnswer(selectedAnswer, correct);
        }
    };

    return (
        <section className="animate__animated animate__fadeIn animate__faster w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700">
            <div className="w-full flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                <span>Question {questionNumber} sur {totalQuestions}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                {question.question}
            </h2>

            <div className="w-full flex flex-col gap-3 mb-6">
                {question.answers.map((answer, index) => {
                    const inputId = `answer-${questionNumber}-${index}`;
                    let optionStyle = "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-300";

                    if (isSubmitted) {
                        if (answer === question.correct) {
                            optionStyle = "bg-green-50 dark:bg-green-950/40 border-green-500 text-green-900 dark:text-green-300 font-semibold shadow-sm";
                        } else if (answer === selectedAnswer && !isCorrect) {
                            optionStyle = "bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-300 shadow-sm";
                        } else {
                            optionStyle = "opacity-50 border-gray-200 dark:border-gray-700";
                        }
                    } else if (selectedAnswer === answer) {
                        optionStyle = "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-300 font-semibold shadow-sm";
                    }

                    return (
                        <label
                            key={index}
                            htmlFor={inputId}
                            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${optionStyle}`}
                        >
                            <input
                                id={inputId}
                                type="radio"
                                name={`question-${questionNumber}`}
                                value={answer}
                                checked={selectedAnswer === answer}
                                disabled={isSubmitted}
                                onChange={() => setSelectedAnswer(answer)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            />
                            <span className="ml-3 text-base text-gray-800 dark:text-gray-200">{answer}</span>
                        </label>
                    );
                })}
            </div>

            {isSubmitted ? (
                <div
                    className={`animate__animated ${
                        isCorrect ? "animate__bounceIn" : "animate__headShake"
                    } w-full p-5 rounded-xl border-2 mb-2 ${
                        isCorrect
                            ? "bg-green-50 border-green-400 text-green-900 dark:bg-green-950/40 dark:border-green-800 dark:text-green-200"
                            : "bg-red-50 border-red-400 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200"
                    }`}
                >
                    <p className="font-bold text-lg mb-1 flex items-center gap-2">
                        <span>{isCorrect ? "🎉 Bonne réponse !" : "❌ Mauvaise réponse !"}</span>
                    </p>
                    {!isCorrect && (
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            La bonne réponse était : <span className="underline font-bold text-green-700 dark:text-green-400">{question.correct}</span>
                        </p>
                    )}
                    {question.moreInfo && <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{question.moreInfo}</p>}
                    {question.lien && (
                        <a
                            href={question.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <span>En savoir plus</span>
                            <span>↗</span>
                        </a>
                    )}
                </div>
            ) : (
                <button
                    onClick={handleValidate}
                    disabled={!selectedAnswer}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
                >
                    Valider la réponse
                </button>
            )}
        </section>
    );
}
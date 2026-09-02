export default function NumberQuestion({
    setNumber,
    numberTotalQuestions,
    currentNumber,
    onFinish,
    isCurrentAnswered = false,
}) {
    function handlePrevious() {
        setNumber((prev) => Math.max(0, prev - 1));
    }

    function handleNext() {
        setNumber((prev) => Math.min(numberTotalQuestions - 1, prev + 1));
    }

    const isLastQuestion = currentNumber >= numberTotalQuestions - 1;

    return (
        <div className="animate__animated animate__fadeIn flex items-center justify-between w-full max-w-2xl mt-6">
            <button
                className="px-5 py-2.5 bg-gray-600 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium rounded-xl shadow hover:shadow-md transition-all duration-200 transform hover:-translate-x-0.5 active:translate-x-0"
                onClick={handlePrevious}
                disabled={currentNumber === 0}
            >
                &larr; Précédent
            </button>

            {isLastQuestion ? (
                <button
                    className="animate__animated animate__pulse animate__infinite px-7 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
                    onClick={onFinish}
                >
                    Terminer le quizz 🎉
                </button>
            ) : (
                <button
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow hover:shadow-md transition-all duration-200 transform hover:translate-x-0.5 active:translate-x-0"
                    onClick={handleNext}
                >
                    Suivant &rarr;
                </button>
            )}
        </div>
    );
}
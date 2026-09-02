export default function ChoiceNumber({ numberQuestions, setNumberQuestions, onTrigger, maxQuestions = 15 }) {
    const options = [];
    for (let i = 1; i <= maxQuestions; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div className="animate__animated animate__zoomIn animate__faster flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full border border-gray-100 dark:border-gray-700">
            <span className="text-4xl mb-3 block animate__animated animate__bounce animate__delay-1s">🎯</span>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Configuration du Quizz</h2>
            <label htmlFor="quantity" className="text-gray-600 dark:text-gray-300 mb-2 text-sm sm:text-base">
                Choisissez le nombre de questions souhaité (max {maxQuestions}) :
            </label>
            <select
                id="quantity"
                name="quantity"
                value={numberQuestions}
                onChange={(e) => setNumberQuestions(parseInt(e.target.value, 10))}
                className="my-4 p-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 focus:outline-none w-36 text-center font-bold transition-all"
            >
                {options}
            </select>
            <button
                className="mt-4 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={onTrigger}
            >
                Démarrer le quizz !
            </button>
        </div>
    );
}
export default function NumberQuestion({ setNumber, numberTotalQuestions,currentNumber }) {

    function addNumberQuestions() {
        setNumber(prev => prev + 1);
    }

    function removeNumberQuestions() {
        setNumber(prev => prev - 1);
    }
   
    return <div>        
        { currentNumber > 0 && <button onClick={removeNumberQuestions}>Revenir à la question précédente </button>}
        { currentNumber < numberTotalQuestions && <button onClick={addNumberQuestions}>Passer à la prochaine question </button>}
    </div>
}
export default function NumberQuestion({ setNumberQuestions}) {

    function addNumberQuestions() {
        setNumberQuestions(prev => prev + 1);
    }

    function removeNumberQuestions() {
        setNumberQuestions(prev => prev - 1);
    }
   
    return <div>
        <button onClick={addNumberQuestions}>Passer à la prochaine question </button>
        <button onClick={removeNumberQuestions}>Revenir à la question précédente </button>

    </div>
}
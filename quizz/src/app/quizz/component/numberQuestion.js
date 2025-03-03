export default function NumberQuestion({ setNumber, numberTotalQuestions,currentNumber }) {

    function addNumberQuestions() {
        setNumber(prev => prev + 1);
    }

    function removeNumberQuestions() {
        setNumber(prev => prev - 1);
    }
   
    return <div>
         { currentNumber < numberTotalQuestions && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-3 " onClick={addNumberQuestions}> &lt;&lt; </button>}        
        { currentNumber > 0 && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-3" onClick={removeNumberQuestions}>  &gt;&gt; </button>}
       
    </div>
}
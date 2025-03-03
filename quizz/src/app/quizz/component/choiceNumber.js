export default function ChoiceNumber({ setNumberQuestions, onTrigger }) {


    const options = [];
    for (let i = 1; i <= 20; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    

    return <div>
        <p>Choisissez le nombre de questions que vous souhaitez</p>
        <select onChange={(e) => setNumberQuestions(parseInt(e.target.value))} id="quantity" name="quantity" className="mt-8 p-4 text-black rounded-lg mr-8">
            {options}
        </select>
        <button className="mt-8 p-4 bg-blue-500 text-white rounded-lg" onClick={onTrigger} >
            Démarrer le quizz !
        </button>
    </div>
}
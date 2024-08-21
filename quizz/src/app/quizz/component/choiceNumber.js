
export default function showQuestion() {
    return <div>
        <p>Choisissez le nombre de questions que vous souhaitez</p>
        <select id="quantity" name="quantity" className="text-black">
            {options}
        </select>
        <a className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
            Démarrer le quizz !
        </a>
    </div>
}
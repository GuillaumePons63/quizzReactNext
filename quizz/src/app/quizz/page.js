
export default function Quizz() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Bienvenue</h1>
            <p>Choisissez le nombre de questions que vous souhaitez</p>
            <select id="quantity" name="quantity" className="text-black">
                {options}
            </select>
            <a href="/quiz" className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
                Démarrer le quizz !
            </a>

        </main>
    );
}

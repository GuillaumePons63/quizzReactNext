import showQuestion from "./component/choiceNumber";




export default function Start() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <showQuestion />
        </main>
    );
}



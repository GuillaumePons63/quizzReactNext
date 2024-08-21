import { questions } from './questions/general'

export default function Quizz() {
    return <main>
        <h1 className="text-4xl font-bold">Quizz</h1>
        <p>Testez vos connaissances en informatique</p>
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <h2>{question.question}</h2>
                    <ul>
                        {question.answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </main>
}

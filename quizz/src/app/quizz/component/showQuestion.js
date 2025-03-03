import React, { useState } from 'react';


function checkResponse(response, correct, moreInfo) {
    let result = [];
    if (response === correct) {
        result.push(<p key="correct">youpie</p>);
    } else {
        result.push(<p key="incorrect">dommage</p>);
    }

    result.push(<p key="moreInfo">{moreInfo}</p>);
    return result;
}

export default function Quizz({ question }) {
    let [response, setResponse] = useState(null);
    let selectResponse = null;

    const handleSetResponse = () => {
        setResponse(selectResponse);
    };

    return (
        <main>
            <h1 className="text-4xl font-bold">Quizz</h1>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">{question.question}</h2>
                <div className="flex flex-col items-center justify-center">
                    {question.answers.map((answer, index) => (
                        <div key={index}>
                        <input                            
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 col-6 col-md-3"
                            onClick={() => { selectResponse = answer; }}
                            type="radio" name="answer" value={answer} />
                        <label htmlFor={answer}>{answer}</label>   
                        </div>                     
                    ))}
                </div>
                {response ? (
                    <div>{checkResponse(response, question.correct, question.moreInfo)}</div>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                        onClick={handleSetResponse}
                    >
                        Valider
                    </button>
                )}
            </div>
        </main>
    );
}
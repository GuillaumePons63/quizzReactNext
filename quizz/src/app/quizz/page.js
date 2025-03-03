"use client"

import ChoiceNumber from "./component/choiceNumber";
import ShowQuestion from './component/showQuestion';
import {questions}  from "./component/questions/general";
import NumberQuestion from "./component/numberQuestion";

import React, { useState } from "react";

export default function Start() {


    const [numberQuestions, setNumberQuestions] = useState(0);
    const [quizz, setQuizz] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0)



    const setNewQuizz = () => {
        const quizz = []
        for (let i = 0; i < numberQuestions; i++) {
            const random = Math.floor(Math.random() * questions.length);
            const question = questions[random];
            quizz.push(question);
        }
       
        setQuizz(quizz)
        console.log(quizz)
        setCurrentQuestion(0)
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {quizz.length == 0 ?
            <ChoiceNumber setNumberQuestions={setNumberQuestions} onTrigger={setNewQuizz} /> :
            <ShowQuestion question={quizz[currentQuestion]}  />            
            }
            <NumberQuestion setNumber={setCurrentQuestion} currentNumber={currentQuestion} numberTotalQuestions={quizz.length - 1}  />          
        </main>
    );
}



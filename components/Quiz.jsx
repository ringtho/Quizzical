import React from "react"
import Answer from "./Answer"
import { nanoid } from 'nanoid'

function Quiz(props){


    const answersElements = props.answers.map( answer =>{
        const answerObj = {
            quizId: props.id,
            answer: answer,
            correct_answer: props.correct_answer,
            id: nanoid(),
            
        }
        return (
            <Answer 
                key={answerObj.id} 
                {...answerObj}
                // onclick={handleSelect}
                check={props.check} />
        )
    })

    return (
        <section className="quiz">
            <h2 className="question">{props.question}</h2>
            <div className="answers-container">
                {answersElements}
            </div>
        </section>
    )
}

export default Quiz
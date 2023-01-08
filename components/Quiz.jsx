import React from "react"
import Answer from "./Answer"
import { nanoid } from 'nanoid'

function Quiz(props){
    

    const answersElements = props.answers.map( answer =>{
        const answerObj = {
            answer: answer,
            is_selected: false,
            correct_answer: props.correct_answer,
            id: nanoid()
        }
        return (
            <Answer 
                key={answerObj.id} 
                {...answerObj}
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
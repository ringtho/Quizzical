import React from "react"
import Answer from "./Answer"
import { nanoid } from 'nanoid'

function Quiz(props){
    const [status, setStatus] = React.useState(false)
    function handleSelect(e, answer){
        // console.log(e.target.dataset.id)
        // console.log(answer.id)

		if (e.target.dataset.id === answer.id ){
            // console.log(e.target.dataset.id)
            // console.log(answer.id)
            // return {...answer, is_selected:!answer.is_selected}
            setStatus(prevStatus => !prevStatus)
        }
        console.log(answer)
	}
    

    const answersElements = props.answers.map( answer =>{
        const answerObj = {
            quizId: props.id,
            answer: answer,
            is_selected: status,
            correct_answer: props.correct_answer,
            id: nanoid()
        }
        return (
            <Answer 
                key={answerObj.id} 
                {...answerObj}
                onclick={handleSelect}
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
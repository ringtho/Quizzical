import React from "react"

function Quiz(props){
    const answersElements = props.answers.map((answer)=>{
        return (
            <div className="answer">
                <p>{answer}</p>
            </div>
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
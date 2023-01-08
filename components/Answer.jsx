import React from "react"


function Answer(props){
    const [status, setStatus] = React.useState(props.is_selected)
    const [isCorrect, setIsCorrect] = React.useState(false)

    function checkAnswer(e){
        const styles = {
            backgroundColor: "#94D7A2"
        }
        if (status){
            // document.querySelector(".selected").style = styles
        } else {
            console.log("Not selected")
        }
    }

    checkAnswer(window.event)

    function toggleSelect(e, id){
        if(e.target.dataset.id === id){
            setStatus(prevStatus => !prevStatus)
        }
    }

    return (
        <div 
            className={status ? "selected" : "answer" }
            data-id={props.id} 
            onClick={()=> toggleSelect(window.event, props.id)}>
            <p data-id={props.id}>{props.answer}</p>
        </div>
    )
}

export default Answer
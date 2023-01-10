import React from "react"


function Answer(props){
    // console.log(props)
    // const [status, setStatus] = React.useState(props.is_selected)

    // function toggleSelect(e, id){
    //     if(e.target.dataset.id === id){
    //         setStatus(prevStatus => !prevStatus)
    //     }
    // }

    // console.log(props.quiz_id)
    

    return (
        <div 
            className={props.is_selected ? "selected" : "answer" }
            data-id={props.id} 
            onClick={()=> props.onclick(window.event, props)}>
            <p data-id={props.id}>{props.answer}</p>
        </div>
    )
}

export default Answer
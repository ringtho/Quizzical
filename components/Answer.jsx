import React from "react"


function Answer(props){
    const [status, setStatus] = React.useState(false)
    // console.log(props)
    // console.log(props.answer, props.correct_answer)
    // console.log(props)
    // const [status, setStatus] = React.useState(props.is_selected)

    // function toggleSelect(e, id){
    //     if(e.target.dataset.id === id){
    //         setStatus(prevStatus => !prevStatus)
    //     }
    // }

    // console.log(props.quiz_id)
    
    function handleSelect(e){
		if (e.target.id === props.id ){
            setStatus(prevStatus => !prevStatus)
        }
	}
    

    // console.log(props)
    return (
        <div 
            className={status ? "selected" : "answer" }
            id={props.id} 
            onClick={handleSelect}>
            <p>{props.answer}</p>
        </div>
    )
}

export default Answer
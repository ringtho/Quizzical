


const GET_QUESTIONS = "GET_QUESTIONS"

export function getQuestions(data){
    return {
        type: GET_QUESTIONS,
        payload: data
    }
}

export default function questionsReducer(state=[], action){
    switch(action.type){
        case GET_QUESTIONS:
            return action.payload
        default:
            return state
    }

}



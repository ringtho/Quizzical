import {legacy_createStore as createStore, combineReducers} from "redux"
import questionsReducer from "./reducers"

const reducer = combineReducers({
    questions : questionsReducer
})

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

export default store
import React from "react"
import Quiz from "./components/Quiz"
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux"
import { getQuestions } from "./redux/reducers"

function App() {

	const [quiz, setQuiz] = React.useState([])
	const dispatch = useDispatch()
	const { questions } = useSelector(state => state)
	console.log(questions)
	
	function question(data){
		let quizArray = []
		for (let quiz of data.results){
			const quizObject = {
				id: nanoid(),
				question: quiz.question,
				answers : [...quiz.incorrect_answers, quiz.correct_answer],
				correct_answer: quiz.correct_answer
			}
			quizArray.push(quizObject)
		}
		return quizArray
	}

	React.useEffect(() => {
		fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
			.then(res => res.json())
			.then(data => {
				setQuiz(question(data))
				dispatch(getQuestions(question(data)))
			})
	},[])


	function checkAnswers(selectedValue, correctAnswer){
		if (selectedValue === correctAnswer){
			console.log(selectedValue, correctAnswer)
			console.log(true)
		}
	}

	const quizElements = quiz.map((item, index)=> 
		<Quiz key={index} {...item} check={checkAnswers} />)

	return (
		<main className="main">
			{quizElements}
			<div className="button-container">
				<button className="button" onClick={checkAnswers}>Check Answers</button>
			</div>
			
		</main>
    
  )
}

export default App

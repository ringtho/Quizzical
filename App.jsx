import React from "react"
import Quiz from "./components/Quiz"
import quizData from "./data"

function App() {

	const [quiz, setQuiz] = React.useState(question(quizData))
	
	function question(data){
		let quizArray = []
		for (let quiz of data.results){
			const quizObject = {

				question: quiz.question,
				answers : [...quiz.incorrect_answers, quiz.correct_answer],
				correct_answer: quiz.correct_answer,
				incorrect_answers: quiz.incorrect_answers
			}
			quizArray.push(quizObject)
		}
		return quizArray
	}

	// React.useEffect(() => {
	// 	console.log("Effect rendered")
	// 	fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
	// 		.then(res => res.json())
	// 		.then(data => console.log(data))
	// },[])

	// fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
	// 	.then(res => res.json())
	// 	.then(data => console.log(data))

	const quizElements = quiz.map((item, index)=> <Quiz key={index} {...item} />)

	return (
		<main className="main">
			{quizElements}
			<div className="button-container">
				<button className="button">Check Answers</button>
			</div>
			
		</main>
    
  )
}

export default App

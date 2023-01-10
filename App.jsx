import React from "react"
import Quiz from "./components/Quiz"
import { nanoid } from "nanoid"

function App() {

	const [quiz, setQuiz] = React.useState([])
	
	function question(data){
		let quizArray = []
		for (let quiz of data.results){
			const quizObject = {
				id: nanoid(),
				question: quiz.question,
				answers : [...quiz.incorrect_answers, quiz.correct_answer],
				correct_answer: quiz.correct_answer,
				incorrect_answers: quiz.incorrect_answers
			}
			quizArray.push(quizObject)
		}
		return quizArray
	}

	React.useEffect(() => {
		console.log("Effect rendered")
		fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple`)
			.then(res => res.json())
			.then(data => setQuiz(question(data)))
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

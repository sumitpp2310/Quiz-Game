const quizData = [
	{
		question: "Which language runs in a web browser?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "Javascript",
		correct: "d",
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Hypotext Markup Language",
		c: "Hypertest Markup Language",
		d: "hypertext Makeup Language",
		correct: "a",
	},
	{
		question: "What does CSS stand for?",
		a: "Central Simple State",
		b: "Cascading Style Sheets",
		c: "Cascading Simple Sheets",
		d: "Cascading Spread Sheets",
	},
	{
		question: "Who is founder of HTML?",
		a: "",
		b: "",
		c: "",
		d: "",
		correct: "",
	},
	{
		question: "When was Javascript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "1997",
		correct: "",
	}

];

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const quesrionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const prev=document.getElementById('prev')
const next=document.getElementById('next')

let currentQuiz=0
let score=0

loadQuiz()
function loadQuiz() {
	deselectAnswers()
	const currentQuizData=quizData[currentQuiz]
	quesrionEl.innerText=currentQuizData.a
	quesrionEl.innerText=currentQuizData.b
	quesrionEl.innerText=currentQuizData.c
	quesrionEl.innerText=currentQuizData.d
}
function deselectAnswers(){
	answerEls.forEach(answerEls=>answerEls.checked=false)
}
function getSelected() {
	let answerEls
	answerEls.forEach(answerEl=> {
		if(answerEl.checked) {
			answer=answerEl.id
		}
	})
	return answer
}
nextBtn.addEventListner('click',() => {
	const answer=getSelected()
	if (answer) {
		if (answer===quizData[currentQuiz].correct) {
			score++
		}
		currentQuiz++
		if (currentQuiz<quizData.length) {
			loadQuiz()
		} else {
			quiz.innerHTML=`
			<h2>You scored ${score} out of ${quizData.length}</h2>
			<button onclick="location.reload()">Reload</button>
			`
		}
	}
})
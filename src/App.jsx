import { useState } from 'react'
import { quizData } from './data/quizData'
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 5)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const getBadge = () => {
    return quizData.badges.reduce((prev, curr) => {
      return score >= curr.points ? curr : prev
    }, quizData.badges[0])
  }

  const handleClaimDiscount = () => {
    // Here you can add functionality to handle the discount claim
    alert('Discount code copied to clipboard!')
  }

  const SteamAnimation = () => (
    <div className="steam">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  if (!quizStarted) {
    return (
      <div className="container">
        <div className="background-gradient"></div>
        <div className="card">
          <SteamAnimation />
          <div className="card-header"></div>
          <div className="card-content">
            <h1 className="title">Unlock Your Coffee Persona</h1>
            <p className="subtitle">Take our epic coffee quiz and claim your badge!</p>
            <button className="button" onClick={handleStartQuiz}>
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showScore) {
    const badge = getBadge()
    return (
      <div className="container">
        <div className="background-gradient"></div>
        <div className="card">
          <SteamAnimation />
          <div className="card-header"></div>
          <div className="card-content">
            <h2 className="title">{badge.title}</h2>
            <img 
              src={badge.image} 
              alt={badge.name} 
              className="badge-image"
            />
            <p className="score-text">Your score: {score} points</p>
            <button 
              className="button claim-button" 
              onClick={handleClaimDiscount}
            >
              Claim your {badge.discount} discount!
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="background-gradient"></div>
      <div className="card">
        <SteamAnimation />
        <div className="card-header"></div>
        <div className="card-content">
          <div className="status-bar">
            <span className="status-pill">
              Question {currentQuestion + 1}/{quizData.questions.length}
            </span>
            <span className="status-pill">
              Score: {score}
            </span>
          </div>
          <h2 className="question">{quizData.questions[currentQuestion].question}</h2>
          <div className="options">
            {quizData.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
                className="option-button"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

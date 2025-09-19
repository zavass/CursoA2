"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizComponentProps {
  title: string
  questions: Question[]
  icon?: string
}

export function QuizComponent({ title, questions, icon }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setShowResult(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
    setAnswers([])
  }

  const getButtonClass = (optionIndex: number) => {
    if (!showResult) {
      return selectedAnswer === optionIndex ? "quiz-button-default border-2 border-primary" : "quiz-button-default"
    }

    if (optionIndex === questions[currentQuestion].correctAnswer) {
      return "quiz-button-correct"
    }

    if (selectedAnswer === optionIndex && optionIndex !== questions[currentQuestion].correctAnswer) {
      return "quiz-button-incorrect"
    }

    return "quiz-button-default opacity-50"
  }

  if (quizCompleted) {
    return (
      <Card className="quiz-background p-8">
        <CardContent className="text-center space-y-6">
          <div className="flex justify-center">
            <Trophy className="w-16 h-16 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Quiz Completed!</h3>
          <div className="text-4xl font-bold text-primary">
            {score}/{questions.length}
          </div>
          <p className="text-muted-foreground">
            {score === questions.length
              ? "Perfect! You mastered this topic!"
              : score >= questions.length / 2
                ? "Good job! Keep practicing!"
                : "Don't worry, try again to improve!"}
          </p>
          <Button onClick={resetQuiz} className="gradient-vibrant text-white">
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="quiz-background">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon && <img src={icon || "/placeholder.svg"} alt="Quiz" className="w-8 h-8" />}
          <span>{title}</span>
          <span className="text-sm text-muted-foreground ml-auto">
            {currentQuestion + 1}/{questions.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="quiz-card p-6 rounded-lg">
          <h3 className="text-lg font-medium text-foreground mb-4">{questions[currentQuestion].question}</h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full text-left justify-start p-4 h-auto ${getButtonClass(index)}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                {option}
                {showResult && index === questions[currentQuestion].correctAnswer && (
                  <CheckCircle className="w-5 h-5 ml-auto text-white" />
                )}
                {showResult && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                  <XCircle className="w-5 h-5 ml-auto text-white" />
                )}
              </Button>
            ))}
          </div>
        </div>

        {showResult && (
          <div className="quiz-card p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Explanation:</strong> {questions[currentQuestion].explanation}
            </p>
          </div>
        )}

        {!showResult && (
          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="w-full gradient-vibrant text-white"
          >
            {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

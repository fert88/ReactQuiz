import React, { useEffect, useState } from 'react'
import "./qcard.css"

const QuestionCard = ({ questionsData, score, setScore, count, setCount, finish, setFinish }) => {
    const [time, setTime] = useState(30)

    const selectedAnswer = (e) => {
        const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer
        if (checkAnswer) {
            setScore(score + 10)
        }
        setCount(count + 1)
        if (count === 9) {
            setFinish(true)
        }
        setTime(30)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(time - 1)
            }
            if (time === 0 && count < 10) {
                setCount(count + 1)
                setTime(30)
            } else if (count >= 10) {
                setFinish(true)
             }            
        }, 1000)
    return () => {
        clearInterval(interval)
    }

}, [time])
return (
    < div className='question' >
        <div className='question-container'>
            <div className='question-time'>
                {time}
            </div>
            <div className='question-text'>
                {count + 1}/10-{questionsData[count]?.question}
            </div>
            <div className='question-answer'>
                {
                    questionsData[count]?.answers.map((answer, i) => (
                        <button onClick={selectedAnswer} value={answer} key={i}>{answer}</button>
                    ))
                }

            </div>

        </div>
    </div>
)
        
}

export default QuestionCard
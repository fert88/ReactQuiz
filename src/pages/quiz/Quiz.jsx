import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from "../../api/api"
import Finish from '../../components/finish/Finish'
import Loading from '../../components/loading/Loading'
import QuestionCard from '../../components/qcard/QuestionCard'
import "./quiz.css"

const Quiz = () => {
  const { difficulty, amount } = useParams()
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [finish, setFinish] = useState(false)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount)
      setQuestionsData(data)
    }
    getData()
    setLoading(false)

  }, [])
  return (
    <div>
      {
        loading ? <Loading /> : finish ? (<Finish score={score} />) : (<QuestionCard questionsData={questionsData}
          score={score}
          count={count}
          setScore={setScore}
          setCount={setCount}
          finish={finish}
          setFinish={setFinish}
        />)

      }


    </div>



  )
}

export default Quiz
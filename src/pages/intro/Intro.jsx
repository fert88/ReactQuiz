import React, { useState } from 'react'
import "./intro.css"
import logo from "../../components/images/logo.jpg"
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'
const Intro = () => {
  const difficulty=["easy","medium","hard"]
  const [difficultyChange,setDifficultyChange]=useState("")
  const navigate=useNavigate()
  const total_question=10
  const startQuiz=()=>{
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${total_question}`)
    }

  }

  return (
    <div className='intro'>
      <div className='intro-container'>
        <div className='intro-logo'>
          <img src={logo} alt="logo" />
        </div>
        <Dropdown data={difficulty} func={setDifficultyChange} />
        <div className='intro-btn'>
          <button onClick={startQuiz} className='intro-btn-item'>Start Quiz</button>
        </div>

      </div>


    </div>
  )
}

export default Intro
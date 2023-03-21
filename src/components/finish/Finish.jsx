import React from 'react'
import "./finish.css"
const Finish = ({score}) => {
  return (
    <div className='finish'>
        <div className="finish-container">
            <div className="finish-score">
                Your Score is {score}
            </div>
            <div className="finish-btn">
                <button onClick={()=> window.location ="/"} className='finish-btn'>Try Again</button>
            </div>
        </div>

    </div>
  )
}

export default Finish
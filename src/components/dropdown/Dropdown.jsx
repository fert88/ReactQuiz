import React from 'react'
import "./dropdown.css"

const Dropdown = ({data,func}) => {
  return (
    <div className='dropdown'>
        <select name="" id="" onChange={e=>func(e.target.value)}>
            {
                data.map((dt,i)=>(
                    <option key={i} value={dt}>{dt}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown
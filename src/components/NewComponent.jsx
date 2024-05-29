import React from 'react'
import { useState } from 'react'
export const NewComponent = () => {
  const [count, setCount] = useState('')
  const [result, setResult] = useState('')


  const handleChange = (e) => { 
    setCount(event.target.value)
   }
   const handleClick = (e) => { 
    setResult(eval(count))
   }
  return (
    <div>
      <input type="text" value={count} onChange={handleChange}/>
      <div>
        <button className='btn' onClick={handleClick}>calcular</button>
      </div>
      {result && <p>Result : {result}</p>}
    </div>
  )
}


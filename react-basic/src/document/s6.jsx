import React,{ useState } from 'react'

const Screen6 = (props) => {
    const [x,setX] = useState(1)

    const addValue = (val) => {
        setX(x + val)
    }
    console.log(`component render`)
  return (
    <div>
      <h1>States in Arrow function</h1>
      <h2> Variable x = { x } </h2>

      <button onClick={() => addValue(1)}>Add+1</button>
    </div>
  )
}

export default Screen6

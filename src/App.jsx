import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-red-500'>
        Hello React
      </p>
    </>
  )
}

export default App
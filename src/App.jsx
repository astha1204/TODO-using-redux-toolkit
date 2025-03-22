import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-300 h-[570px] w-full px-3 py-2 rounded '>
      <AddTodo/>
      <Todos/>
      </div>
      
    </>
  )
}

export default App

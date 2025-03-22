import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

function AddTodo() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        //yaha wo alag se action wagera dene ki need nhi khud krlega
        // dispatch(addTodo({ id: Date.now(), text: input }));
        //Your reducer only expects a string (action.payload), and it automatically assigns an ID using nanoid().
        //Your reducer expects a string, but you're passing an object { id, text }.
// Since the reducer tries to assign action.payload directly to text, this causes unexpected behavior.
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo

import { createSlice ,nanoid } from "@reduxjs/toolkit";


//mistake
//const initialState = {
//     todos: { 
//         id: 1, 
//         text: "Hello World" 
//     } // ❌ This is an object, not an array!
// }
const initialState = {
    todos: [  // ✅ `todos` should be an array!
        { id: 1, text: "Hello World" }
    ]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            //ag id match to wo nhi lenge
            //overwrriting todos
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id==action.payload.id?{ ...todo, ...action.payload } 
            : todo)

        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: JSON.parse(localStorage.getItem("Data")) || [],
}
export const todoSlice = createSlice({
    name:"todoData",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todo = [...state.todo,action.payload]
            localStorage.setItem("Data",JSON.stringify(state.todo))
        },
        deleteTodo:(state,action)=>{
           state.todo = state.todo.filter((todo,i) => i != action.payload)
           localStorage.setItem("Data",JSON.stringify(state.todo))
        },
        updateTodo:(state,action) => {
            state.todo = state.todo.map((item,i)=>i == action.payload.editIndex ? action.payload.input : item)
            localStorage.setItem("Data",JSON.stringify(state.todo))
        }
    }
})
export const {addTodo , deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
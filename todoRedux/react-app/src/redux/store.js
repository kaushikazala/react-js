import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './todolist/todoslice'

export const store = configureStore({
  reducer: {
    todoData:todoSlice
  },
})
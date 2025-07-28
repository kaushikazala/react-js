import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/todolist/todoslice";

const TodoList = () => {
  const [input, setInput] = useState("");
  const todoList = useSelector((state) => state.todoData.todo);
  const dispatch = useDispatch();
  const [boolean,setBoolean] = useState(false)
  const [editIndex,setEditIndex] = useState(null)

  function handleAdd() {
    dispatch(addTodo(input));
    alert("done");
    setInput("");
  }

  function handleDelet(){
    dispatch(deleteTodo(input))
  }
  function handleEdit(index){
   setBoolean(true);
   setInput(todoList[index])
   setEditIndex(index)
   
  }
  function handleUpdate(){
   dispatch(updateTodo({editIndex,input}))
   setBoolean(false)
   setInput("")
  }
  return (
    <>
      <h1>TODOLIST</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       {boolean ? (
        <button onClick={handleUpdate}>update</button>
      ) : (
        <button onClick={handleAdd}>add</button>
      )}

        <div>
            {todoList && todoList.map((item,index)=>{
             
                return(
                <div key={index}>
                     <p>{item}</p>
                    <button onClick={handleDelet(index)}>Delete</button>
                    <button onClick={handleEdit(index)}>Edit</button>
                </div>
                   
                )
            })}
        </div>
      </div>
    </>
  );
};
export default TodoList;

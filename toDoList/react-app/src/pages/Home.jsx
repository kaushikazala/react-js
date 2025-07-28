
import React, { useEffect, useState } from "react";

const Home = () => {
  const [inputText, setText] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  function handleAdd() {
    if (!inputText.trim()) {
      alert("first you have fill input text");
      return;
    }
    setTodolist([...todolist, inputText]);
    setText("");
  }
  function handleDelete(index) {
    let filterData = todolist.filter((item, i) => i != index);
    setTodolist(filterData);
  }
  function handleEdit(index) {
    setText(todolist[index]);
    setEditIndex(index);
    setBoolean(true);
  }
  function handleUpdate() {
    let updateData = todolist.map((item, i) =>
      i == editIndex ? inputText : item
    );
    setTodolist(updateData);
    setText("");
    setBoolean(false);
  }
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
    
  }, [todolist]);

  return (
    <>
     <div className="text-center">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Todolist</h1>
      <input
  value={inputText}
  onChange={(e) => setText(e.target.value)}
  type="text"
  placeholder="Enter your task"
  className="border-2 border-gray-300 p-2 rounded-lg w-64 focus:outline-none focus:border-indigo-500 text-center"
/>

    {boolean ? (
  <button
    onClick={handleUpdate}
    className="ml-3 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
  >
    Update
  </button>
) : (
  <button
    onClick={handleAdd}
    className="ml-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
  >
    Add
  </button>
)}


     <div className="mt-6 justify-center flex">
  {todolist.map((item, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow w-100"
    >
      <p className="text-gray-800">{item}</p>
      <div className="space-x-2">
        <button
          onClick={() => handleDelete(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
        >
          Delete
        </button>
        <button
          onClick={() => handleEdit(index)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
        >
          Edit
        </button>
      </div>
    </div>
  ))}
</div>
</div>
    </>
  );
};

export default Home;

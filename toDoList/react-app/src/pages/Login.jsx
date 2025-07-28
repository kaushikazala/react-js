import React, { useState } from "react";
import { Link } from "react-router";
import Home from "./Home";


const Login = () => {
  const [data, setData] = useState( {name:"", email:"",password:""});
  const [error,setError] = useState({})
  const [submitData, setSubmitData] = useState(null)


  function handlesumbit(e){
    e.preventDefault();
    if(validation()){
      setData({name:"", email:"",password:""})
    }
  }

  function validation(){
    let obj = {};
    let val = true;

    if(!data.name.trim()){
      val = false;
      obj.name = "Name is not valid";
    }
     if(!data.email.trim()){
      val = false;
      obj.email = "Email is not valid";
    }
     if(!data.password.trim()){
      val = false;
      obj.password = "Password is not valid";
    }
    setError(obj)
    return val
  }
  return (
    <>
<div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full h-screen text-2xl font-mono flex flex-col items-center justify-center">

     <div className="flex justify-center text-gray-800 w-full">
<form
  onSubmit={handlesumbit}
  className="bg-white w-[90%] max-w-md p-8 rounded-2xl shadow-2xl"
>
<div className="mb-5">
  <label className="block mb-2 font-semibold">
    UserName:
    <input
      type="text"
      placeholder="Enter your name"
      value={data.name}
      onChange={(e)=>setData({...data,name:e.target.value})}
      className="w-full border-2 border-gray-300 pl-2 p-2 rounded-lg focus:outline-none focus:border-indigo-500"
    />
  </label>
</div>


        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Email:
            <input type="email" placeholder="Enter your Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} 
            className="w-full border-2 border-gray-300 pl-2 p-2 rounded-lg focus:outline-none focus:border-indigo-500"/>
          </label>
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Password:
            <input type="password" placeholder="Enter your Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} 
             className="w-full border-2 border-gray-300 pl-2 p-2 rounded-lg focus:outline-none focus:border-indigo-500"/>
          </label>
        </div> 
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg w-full mt-2 transition">
  Submit
</button>

      </form>
      </div>
    <Link to="/home">
  <button className="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">
    Next
  </button>
</Link>


      </div>


       {submitData && (
        <div  className="bg-white text-gray-800 p-4 rounded shadow mt-5">
          <p>{submitData.name}</p>
          <p>{submitData.email}</p>
          <p>{submitData.password}</p>
        </div>
      )}
    </>
  );
};

export default Login;
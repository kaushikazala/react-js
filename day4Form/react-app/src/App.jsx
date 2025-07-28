import React, { useState } from "react";
import "./App.css"

const App = () => {
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
    <div className="bg-blue-300 w-full h-screen text-2xl  font-mono" >
      <div className=" flex justify-center text-cyan-800  ">
      <form action="" onSubmit={handlesumbit} className="bg-amber-100 w-[50%] h-[40%] p-15 ">
        <div  className=" mb-3.5">
          <label htmlFor="">
            UserName:
            <input type="text" placeholder="Enter your name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}  className=" border-2  pl-2 "/>
          </label>
          
        </div>

        <div className="mb-3.5">
          <label htmlFor="">
            Email:
            <input type="email" placeholder="Enter your Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} className=" border-2  pl-2"/>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="">
            Password:
            <input type="password" placeholder="Enter your Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}  className=" border-2 pl-2"/>
          </label>
        </div> 
        <button className="bg-cyan-800 text-amber-50 p-3 rounded-2xl">submit</button>
      </form>
      </div>
      </div>

       {submitData && (
        <div>
          <p>{submitData.name}</p>
          <p>{submitData.email}</p>
          <p>{submitData.password}</p>
        </div>
      )}
    </>
  );
};

export default App
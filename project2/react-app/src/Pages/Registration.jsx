import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    number: "",
    password: "",
    confirmpass: "",
  });
  const [error,setError]= useState({})
  const [submitData,setSubmitData] = useState(null)

  function handlesumbit (e){
    e.preventDefault();
    if(validation()){
      setSubmitData(data);
      setData({fullName: "",
    email: "",
    number: "",
    password: "",
    confirmpass: "",
  })
    }
  }

  function validation() {
    let obj = {};
    let val = true;

    if (!data.fullName.trim()) {
      val = false;
      obj.fullName = "name is not valid";
    }
    if (!data.email.trim()) {
      val = false;
      obj.email = "email is not valid";
    }
    if (!data.number.trim()) {
      val = false;
      obj.number = "number is not valid";
    }
    if (!data.password.trim()) {
      val = false;
      obj.password = "password is not valid";
    }
    if (!data.confirmpass.trim()) {
      val = false;
      obj.confirmpass = "confirm password is not valid";
    } else if (data.password !== data.confirmpass) {
      val = false;
      obj.confirmpass = "password do not match";
    }
setError(obj)
    return val;
  }
  return (
    <>
      <div className="bg-blue-300 w-full h-screen text-2xl  items-center justify-center font-mono grid ">
        <div className=" bg-amber-50 p-20 rounded-2xl text-cyan-800">
          <form action="" onSubmit={handlesumbit}>
            <div className="mb-5">
              <label htmlFor="">
                Full Name:
                <p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className=" border-2  pl-2  "
                    onChange={(e)=> setData({...data,fullName: e.target.value})}
                  />
                </p>
              </label>
              {error.fullName && <p className="text-red-600"> {error.fullName} </p>}
            </div>
            <div className="mb-5">
              <label htmlFor="">
                Email:
                <p>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className=" border-2  pl-2 "
                    onChange={(e)=> setData({...data,email: e.target.value})}
                  />
                </p>
              </label>
              {error.email && <p className="text-red-600"> {error.email} </p>}
            </div>

            <div className="mb-5">
              <label htmlFor="">
                Phone Number:
                <p>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className=" border-2  pl-2 "
                    onChange={(e)=> setData({...data,number: e.target.value})}
                  />
                </p>
              </label>
              {error.number && <p className="text-red-600"> {error.number} </p>}
            </div>
            <div className="mb-5">
              <label htmlFor="">
                Password:
                <p>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" border-2  pl-2 "
                    onChange={(e)=> setData({...data,password: e.target.value})}
                  />
                </p>
              </label>
              {error.password && <p className="text-red-600"> {error.password} </p>}
            </div>
            <div className="mb-5">
              <label htmlFor="">
                Confirm Password:
                <p>
                  <input
                    type="password"
                    placeholder="confirm your password"
                    className=" border-2  pl-2 "
                    onChange={(e)=> setData({...data,confirmpass: e.target.value})}
                  />
                </p>
              </label>
              {error.confirmpass && <p className="text-red-600"> {error.confirmpass} </p>}
            </div>

            <div className="mb-5 ">
              <label htmlFor="" className="flex justify-around">
                Gender:
                <input type="radio" name="gender" />
                Female
                <input type="radio" name="gender" />
                Male
              </label>
            </div>

            <button className="bg-cyan-800 text-amber-50 p-3 rounded-2xl cursor-pointer">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;

import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});
  const [submitData, setSubmitData] = useState(null);

  function handlesumbit(e) {
    e.preventDefault();
    if (validation()) {
      setData({ name: "", email: "", password: "" });
    }
  }

  function validation() {
    let obj = {};
    let val = true;

    if (!data.name.trim()) {
      val = false;
      obj.name = "Name is not valid";
    }
    if (!data.email.trim()) {
      val = false;
      obj.email = "Email is not valid";
    }
    if (!data.password.trim()) {
      val = false;
      obj.password = "Password is not valid";
    }
    setError(obj);
    return val;
  }
  return (
    <>
      <div className="bg-blue-300 w-full h-screen text-2xl flex items-center justify-center font-mono ">
        <div className="  text-cyan-800 ">
          <form
            action=""
            onSubmit={handlesumbit}
            className="bg-amber-100 h-[40%] p-15 rounded-2xl "
          >
            <h1 className="flex justify-center font-bold text-4xl pb-6">
              Login
            </h1>
            <div className=" mb-3.5">
              <label htmlFor="">
                UserName:
                <p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className=" border-2  pl-2 "
                  />
                </p>
              </label>
              {error.name && (
                <p style={{ color: "red", fontSize: "16px" }}>{error.name}</p>
              )}
            </div>

            <div className="mb-3.5">
              <label htmlFor="">
                Email:
                <p>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className=" border-2  pl-2"
                  />
                </p>
              </label>
              {error.email && (
                <p style={{ color: "red", fontSize: "16px" }}>{error.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="">
                Password:
                <p>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    className=" border-2 pl-2"
                  />
                </p>
              </label>
              {error.password && (
                <p style={{ color: "red", fontSize: "16px" }}>
                  {error.password}
                </p>
              )}
            </div>
            <button className="bg-cyan-800 text-amber-50 p-3 rounded-2xl cursor-pointer">
              submit
            </button>
          </form>
          <p className=" pl-[80%] mt-2 ">
            <Link to="/registration">
              <button className="bg-amber-50 text-cyan-800 p-2  rounded-2xl cursor-pointer">
                Next
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

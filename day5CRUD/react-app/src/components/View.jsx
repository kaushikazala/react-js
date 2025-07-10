import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";



const View = () => {
  const { id } = useParams();
  const [input, setInput] = useState({});

  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3000/Products/${id}`);
      console.log(res.data);
      setInput(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <h1 className="flex justify-center text-5xl font-bold text-green-600 pt-10 ">View...</h1>
    <div className="flex justify-center  pl-65 mt-52 w-[100%]">
      <div style={{ height: "400px", width: "500px" }} key={input.id}>
        <img src={input.image} alt="" height={"300px"} width={"250px"} className="rounded-2xl"  />
        <p>Title:{input.name}</p>
        <p>Price:{input.price}</p>
        <Link to="/"><button  className="bg-green-600 text-amber-50 p-2.5 rounded-2xl">Back</button></Link>
      </div>
      </div>
    </>
  );
};

export default View;

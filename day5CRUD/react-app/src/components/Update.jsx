import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Update = () => {
  const [input, setInput] = useState({ name: "", image: "", price: "" });
  const { id } = useParams();
  async function getData() {
    try {
      let res = await axios.get(`http://localhost:3000/Products/${id}`);
      console.log(res.data);
      setInput(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleEdit(e) {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/Products/${id}`, input);
    setInput({ name: "", image: "", price: "" })
    alert("Updated");
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="flex justify-center text-5xl font-bold text-green-600 p-3 ">
        Edit Your Products..
      </h1>


      <form action="" onSubmit={handleEdit}  className="flex justify-center gap-1.5">
        <input
         className="border-2 p-2.5 rounded-2xl border-gray-400"
          type="text"
          placeholder="Enter your product name.."
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <input
         className="border-2 p-2.5 rounded-2xl border-gray-400"
          type="text"
          placeholder="Enter your product price.."
          value={input.price}
          onChange={(e) => setInput({ ...input, price: e.target.value })}
        />
        <input
         className="border-2 p-2.5 rounded-2xl border-gray-400"
          type="text"
          placeholder="Enter your product image.."
          value={input.image}
          onChange={(e) => setInput({ ...input, image: e.target.value })}
        />
        <button  className="bg-green-600 text-amber-50 p-2.5 rounded-2xl">Submit</button>
      <Link to="/"><button className="bg-green-600 text-amber-50 p-2.5 rounded-2xl">Back</button></Link>

      </form>
      
    </>
  );
};

export default Update;

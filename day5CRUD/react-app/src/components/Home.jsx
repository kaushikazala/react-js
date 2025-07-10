import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ name: "", image: "", price: "" });
  const [filterData, setFilterData] = useState([]);
  const [count, setCount] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  async function getData() {
    try {
      let res = await axios.get(
        `http://localhost:3000/Products/?_page=${count}&_per_page=2`
      );
      // console.log(res.data);
      setData(res.data.data);
      setFilterData(res.data.data);
      setPageCount(res.data.pages);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (input.name == "" && input.image == "" && input.price == "") {
      alert("Input is empty");
      return;
    }

    await axios.post("http://localhost:3000/Products", input);
    alert("Added");
    getData();
    setInput({ name: "", image: "", price: "" });
  }

  async function handleDelete(id) {
    await axios.delete("http://localhost:3000/Products/" + id);
    getData();
  }
  function handleAsc() {
    let sortData = filterData.sort((a, b) => a.price - b.price);
    setData([...sortData]);
  }
  function handleDes() {
    let sortData = filterData.sort((a, b) => b.price - a.price);
    setData([...sortData]);
  }

  function handleSelect(e) {
    let allData = data;

    if (e.target.value === "all") {
      setFilterData(allData);
      return;
    }
    let filterData = allData.filter((item) => item.slug === e.target.value);
    setFilterData(filterData);
  }

  function handleSec(e) {
    let search = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData(search);
  }
  useEffect(() => {
    getData();
  }, [count]);
  return (
    <>
      <div className="font-[Verdana]">
        <h1 className="flex justify-center text-5xl font-bold text-green-600 p-3">
          Product Page
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center gap-5"
        >
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
            className="border-2 p-2.5 rounded-2xl border-gray-400 "
            type="text"
            placeholder="Enter your product image.."
            value={input.image}
            onChange={(e) => setInput({ ...input, image: e.target.value })}
          />
          <button className="bg-green-600 text-amber-50 p-2.5 rounded-2xl">Submit</button>
        </form>

<div className="flex justify-center gap-2  p-2.5">
        <button onClick={handleAsc} className="border-2 p-2.5 rounded-2xl border-gray-400">
          Asc
        </button>
        <button onClick={handleDes} className="border-2 p-2.5 rounded-2xl border-gray-400">
          Des
        </button>

        <select onChange={handleSelect} className="border-2 p-2.5 rounded-2xl border-gray-400">
          <option value="all">All</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleSec}
          className="border-2 p-2.5 rounded-2xl border-gray-400"
        />
</div>
        <div className="flex justify-center gap-9 p-10 ">
          {filterData.map((item) => {
            return (
              <div  key={item.id} className="text-base/relaxed">
                <img src={item.image} alt="" height={"300px"} width={"250px"} className="rounded-2xl" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className="flex gap-1.5">
                <button
                   className="p-2.5 rounded-2xl bg-red-500 text-amber-50" 
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <Link to={`/update/${item.id}`}>
                  <button className=" p-2.5 rounded-2xl bg-amber-300 text-amber-50">Edit</button>{" "}
                </Link>
                <Link to={`/view/${item.id}`}>
                  <button className=" p-2.5 rounded-2xl bg-green-500 text-amber-50">View</button>
                </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-1.5 ">
        <button
          onClick={() => setCount(count - 1)}
          disabled={count == 1}
          className="bg-green-400 text-amber-50 p-1.5 rounded-2xl"
        >
          Back
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-400 text-amber-50 p-1.5 rounded-2xl "
          disabled={count == pageCount}
        >
          Next 
        </button>
        </div>
      </div>
    </>
  );
};

export default Home;

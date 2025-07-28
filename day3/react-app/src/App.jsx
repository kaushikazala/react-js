import { useEffect, useState } from "react";
import { BiGhost } from "react-icons/bi";

const App = () => {
  let [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <div
      className={` h-screen flex items-center justify-center font-semibold  ${
        darkMode ? "bg-purple-300" : "bg-amber-100"
      } `}
    >
      <div
        className={`bg-amber-50 w-[500px] h-[300px] p-[70px] rounded-4xl ${
          darkMode ? "bg-purple-400" : " bg-amber-50"
        }`}
      >
        <button className="ml-[90%]  " onClick={() => setDarkMode(!darkMode)}>
          {" "}
          <BiGhost className="text-3xl bg-teal-400 text-amber-50 rounded-full p-1  w-10" />
        </button>
        <h1
          className={`text-6xl justify-center flex mb-3   ${
            darkMode ? "text-amber-100" : "text-amber-900"
          }`}
        >
          Count:{count}
        </h1>
        <div className="flex justify-between  w-[90%] ml-7 mt-5  ">
          <button
            className="text-amber-100 bg-amber-600 text-4xl p-3 w-25 rounded-2xl"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            inc
          </button>
          <button
            className={`text-amber-100 bg-amber-600 text-4xl p-3 w-25 rounded-2xl ${
              count == 0 ? "bg-gray-400" : "bg-red-600"
            }`}
            disabled={count == 0}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            dec
          </button>
          <button
            className="text-amber-100 bg-green-600 text-4xl p-3 rounded-2xl"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

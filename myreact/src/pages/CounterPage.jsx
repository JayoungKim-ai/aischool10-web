import { useState } from "react";
function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center p-20 text-[50px] w-150 bg-white">
        <h1
          className={`text-[100px] text-center  ${count > 0 ? "text-[#ff0000]" : count < 0 ? "text-[#0000ff]" : "text-[#000000]"}`}
        >
          {count}
        </h1>
        <div className="flex justify-between gap-10 ">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            disabled={count <= -5}
            className={`${count <= -5 ? "bg-gray-100" : "bg-blue-100"} w-20 rounded-full ${count >= -4 && "hover:bg-blue-200"}`}
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            className="bg-[#f3f3f3] w-50 pl-5 pr-5 rounded-[10px] hover:bg-[#eee]"
          >
            Reset
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={count >= 5}
            className={`${count >= 5 ? "bg-gray-500" : "bg-blue-500"}  w-20 rounded-full text-white hover:bg-blue-600"}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;

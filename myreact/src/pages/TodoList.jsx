import React from "react";
import { Trash2 } from "lucide-react";
import { useState } from "react";

function TodoList() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const todoAdd = () => {
    if (!userInput) return;
    const newTodos = {
      id: Date.now(),
      text: userInput,
      completed: false,
    };
    setTodos([...todos, newTodos]);
    setUserInput("");
    console.log(Date.now());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">📝 투두리스트</h1>

        {/* 입력창 & 버튼 */}
        <div className="flex gap-2 mb-6">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") todoAdd();
            }}
            type="text"
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded px-4 py-3 outline-none"
          />
          <button
            onClick={todoAdd}
            className="bg-purple-500 text-white font-bold px-6 py-3 rounded"
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        <ul className="max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <li
              className="flex items-center justify-between py-3 border-b border-gray-200"
              key={todo.id}
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  className="w-5 h-5"
                  onChange={() => {
                    const newTodos = todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t,
                    );
                    setTodos(newTodos);
                  }}
                />
                <span
                  className={`text-lg ${todo.completed && "text-gray-400 line-through"}`}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => {
                  const answer = confirm("정말 삭제하시겠습니까?");
                  if (!answer) return;
                  const newTodos = todos.filter((t) => t.id !== todo.id);
                  setTodos(newTodos);
                }}
                className="text-red-500 hover:text-red-600 p-1"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
          {/* <li className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg">첫번째할일</span>
            </label>
            <button className="text-red-500 hover:text-red-600 p-1">
              <Trash2 size={20} />
            </button>
          </li>

          <li className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={true}
                className="w-5 h-5"
              />
              <span className="text-lg text-gray-400 line-through">
                두번째할일
              </span>
            </label>
            <button className="text-red-500 hover:text-red-600 p-1">
              <Trash2 size={20} />
            </button>
          </li>

          <li className="flex items-center justify-between py-3 border-b border-gray-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg">세번째할일</span>
            </label>
            <button className="text-red-500 hover:text-red-600 p-1">
              <Trash2 size={20} />
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

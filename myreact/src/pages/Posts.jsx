import React from "react";
import { useState, useEffect } from "react";

function Posts() {
  const [postData, setPostData] = useState([]);
  console.log(postData);

  useEffect(() => {
    async function getData() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url); // 데이터 요청->응답객체
      const data = await response.json(); // 응답책체에서 데이터 추출
      setPostData(data); // 데이터를 state로 관리
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {postData.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Posts;

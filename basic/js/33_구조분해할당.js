const user = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  job: "개발자",
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.job);

// 구조분해할당
const { name, email } = user;
console.log(name);
console.log(email);

// 배열 구조분해
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first, second, third);

// 연습문제1
const person = { name: "홍길동", age: 30, city: "서울" };
const { name, city } = person;
console.log(name); //홍길동
console.log(city); //서울

// 연습문제2
const user = { name: "Tom", age: 20, city: "Seoul" };
const printUser = (user) => {
  const { name, age } = user;
  console.log(`이름:${name}, 나이:${age}`);
};
printUser(user);

//연습문제3
const arr = [3, 7, 10];
const sumFirstTwo = (arr) => {
  const [first, second] = arr;
  return first + second;
};
console.log(sumFirstTwo(arr));

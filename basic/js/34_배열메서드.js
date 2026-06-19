const { act } = require("react");

const numbers = [1, 2, 3, 4, 5];
// const doubled = [];
// for (num of numbers) {
//   doubled.push(num * 2);
// }
// console.log(doubled);

const doubled = numbers.map((item) => item * 2);
console.log(doubled);

// 객체 배열 다루기
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];

const names = users.map((item) => `<li>${item.name}</li>`);

console.log(names);

// [ '<li>철수</li>', '<li>영희</li>', '<li>민수</li>' ]
// => '
// <li>철수</li>
// <li>영희</li>
// <li>민수</li>

// filter==================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((item) => item % 2 == 0);
console.log(evens);

// 객체 배열에서 조건 필터링
const users = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];

const activeUsers = users.filter((item) => item.isActive);
console.log(activeUsers);

const activeUserNames = users
  .filter((item) => item.isActive)
  .map((user) => user.name);
console.log(activeUserNames);

// 연습문제1
const scores = [95, 72, 88, 63, 91, 55, 87];
console.log(scores.filter((item) => item >= 80));

// 연습문제2
// 문제 2: 다음 학생 배열에서 각 학생의 이름만 추출하세요
const students = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];
console.log(students.map((item) => item.name));

// 문제 3: 다음 학생 배열에서 2학년 이상 학생들의 이름만 추출하세요
const students = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];

console.log(
  students.filter((item) => item.grade === 2).map((item) => item.name),
);

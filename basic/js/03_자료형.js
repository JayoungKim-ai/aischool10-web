// 문자열 --------------------
const greeting = `
안녕하세요
 안녕하세요
   안녕하세요
      안녕하세요
`;
console.log(greeting);

const name = "박코딩";
const message = `안녕하세요. ${name}입니다.`;
console.log(message);

// 숫자 -----------------
const age = 25;
const price = 19.99;
console.log(typeof age);
console.log(typeof price);

// 불리언 -----------------
const isStudent = true;
console.log(typeof isStudent);

// undefined
let noValue;
console.log(typeof noValue);

const empty = null;
console.log(typeof empty);

//  배열 ------------------------
const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);
console.log(fruits.length);

// 객체 -----------------------
const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};
console.log(person.age);
console.log(person["name"]);
person.name = "김철수";
person.email = "a@naver.com";
console.log(person);

// 자료형 변환
const str_num = String(100);
console.log(typeof str_num);

// 3.14를 정수로 만들고 싶다면? ->3
console.log(parseInt(3.14));

// 암묵적 변환
console.log("10" + 5);
console.log("10" + undefined);

console.log("10" * 5);
console.log("a" * 5);

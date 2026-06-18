message = greet("홍길동");
console.log(message);

// 함수 선언문
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

// 함수 표현식 : function(){}
const add = function (x, y) {
  return x + y;
};
console.log(add(1, 2));

// 화살표함수 : ()=>{}
const add2 = (x, y) => {
  return x + y;
};
console.log(add2(10, 20));

const add3 = (x, y) => x + y;
console.log(add3(100, 200));

//1
const square = (n) => n * n;
console.log(square(2));

//2
const greet = (name, greeting = "안녕하세요!") => `${greeting} ${name}님`;
console.log(greet("김철수"));
console.log(greet("김철수", "반갑습니다."));

//3.
const isPassed = (score) => score >= 60;
console.log(isPassed(60));

// let -----------------
let number = 1;
console.log(number);
number = number + 1; //재할당 o
console.log(number);
let number = 100; // error 재선언 x
let cost; // 선언만 하고 값 할당은 미룰 수 있다.
console.log(cost); // undefined
cost = 10000;
console.log(cost);

// const -----------------
const id = "user1";
console.log(id);
id = "user2"; // 재할당 불가
const id = "user2"; // 재선언 불가
const name; // 선언과 동시에 초기화 해야 함

// 키워드를 빼고 변수 사용 X
phone = "010-123-4567";
console.log(phone);

// let, const는 블록스코프
function f() {
  {
    let num = 1;
    console.log(num); // 1
  }
  console.log(num); // error
}

f();

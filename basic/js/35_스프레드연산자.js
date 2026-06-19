const original = [1, 2, 3];
const copy = [...original];
console.log(original, copy);
copy.push(4);
console.log(original, copy);

// 배열 결합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 배열에 요소 추가
const newArr = [...original, 4, 5];
console.log(newArr);

//  객체 스프레드 -------------------------
const original = { name: "홍길동", age: 25 };

const copy = { ...original };
console.log(copy);

const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };

const merged = { ...info, ...details };
console.log(merged);
// { name: '홍길동', age: 25, city: '서울' }

//속성 추가----------------
const user = { name: "홍길동", age: 25 };

const withCity = { ...user, city: "서울" };
console.log(withCity);
// { name: '홍길동', age: 25, city: '서울' }

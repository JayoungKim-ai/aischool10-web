// truethy: 조건문에서 사용될 때 참으로 평가되는 값
// falthy : 조건문에서 사용될 때 거짓으로 평가되는 값 (0, "", undefined, null, NaN)
// && -> truethy일 때 뒤 반환
// || -> falthy일 때 뒤 반환

// falthy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// truethy
console.log(Boolean(1));
console.log(Boolean("a"));
console.log(Boolean([]));
console.log(Boolean({}));

// && : 모두 참 -> 참
console.log(true && true);
console.log(true && false);
console.log("a" && 1); //1
console.log(100 && "hello"); //"hello"

const isAdmin = true;
console.log(isAdmin && "<button>관리자</button>");

console.log(false && true);
console.log(false && false);
console.log(0 && true);
console.log("" && true);
console.log(undefined && true);

// || : 하나 이상 참 -> 참
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

const score = 50;
console.log(false || "불합격");

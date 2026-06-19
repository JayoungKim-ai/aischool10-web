const score = 60;
let result;

if (score >= 60) {
  result = "합격";
} else {
  result = "불합격";
}

console.log(result);

//  삼항연산자
result = score >= 60 ? "합격" : "불합격";
console.log(result);

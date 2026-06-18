// 버튼 클릭 시 텍스트 변경----------------

const $title = document.getElementById("title");
// console.log($title);

const $desc = document.querySelector(".desc");
// console.log($desc);

const $descAll = document.querySelectorAll(".desc");
// console.log($descAll);

// 버튼요소 선택
const $btn = document.querySelector(".btn");
// console.log($btn);

// 버튼을 클릭했을 때 실행될 함수
function fn() {
  $title.textContent = "반갑습니다.";
  $desc.textContent = "1";
}

// 버튼 요소 이벤트 처리
$btn.addEventListener("click", fn);

// 실시간 글자수 출력--------------------
const $message = document.getElementById("message");
// console.log($message);

const $count = document.getElementById("count");
// console.log($count);

$message.addEventListener("input", () => {
  // console.log($message.value.length);
  $count.textContent = $message.value.length;
});

// 스타일 변경 -----------------------
const $text = document.getElementById("text");
const $btn2 = document.getElementById("btn");
$btn2.addEventListener("click", () => {
  $text.classList.add("highlight");
});
console.log(text, btn);

// 요소 추가
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
let itemCount = 1;
addBtn.addEventListener("click", function () {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `새 항목 ${itemCount}`;
  list.appendChild(newItem);
});

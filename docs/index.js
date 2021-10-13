const input = document.getElementById("marks-obt").value;
const result = document.getElementById("result");
const inputCon = document.getElementById("input-con");

var x = grading;
let a = result;

function grading() {
  let a = result;
  if (input >= 70 && input <= 79) {
    a.innerText = "Grade A";
  } else if (input >= 60 && input <= 69) {
    a.innerText = "Grade B";
  } else if (input >= 80) {
    a.innerText = "Grade A1";
  }
  console.log("a", a.value);
}

input.addEventListener("oninput", grading);

const input = document.getElementById("marks-obt").value;
const result = document.getElementById("result");

// input.addEventListener("oninput", grading);

input.oninput = function grading() {
  if (input >= 70 && input <= 79) {
    result.innerText = "Grade A";
  } else if (input >= 60 && input <= 69) {
    result.innerText = "Grade B";
  } else if (input >= 80) {
    result.innerText = "Grade A1";
  }
  console.log("result", result);
};

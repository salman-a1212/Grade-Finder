function grading() {
  let percentage = document.getElementById("marks-obt").value;
  let result = document.getElementById("result");

  if (percentage >= 80 && percentage <= 100) {
    result.innerText = "Grade A1";
    result.style.color = "green";
  } else if (percentage >= 70 && percentage <= 79) {
    result.innerText = "Grade A";
    result.style.color = "green";
  } else if (percentage >= 60 && percentage <= 69) {
    result.innerText = "Grade B";
    result.style.color = "green";
  } else if (percentage >= 50 && percentage <= 59) {
    result.innerText = "Grade C";
    result.style.color = "green";
  } else if (percentage >= 33 && percentage <= 49) {
    result.innerText = "Grade D";
    result.style.color = "green";
  } else {
    result.innerText = "Failed";
    result.style.color = "red";
  }
}

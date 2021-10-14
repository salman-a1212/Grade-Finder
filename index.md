  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Grade Finder</title>
  </head>
  <body>
    <div class="main">
      <h1>Grade Finder</h1>
      <div class="input-con" id="input-con">
        <label for="marks-obt">Marks Obtained</label>
        <input
          type="number"
          placeholder="Insert marks obtained"
          class="marks-obt"
          id="marks-obt"
          oninput="grading()"
        />
        <p class="result" id="result"></p>
      </div>
    </div>
    <script src="index.js"></script>
  </body>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Courier Prime", "Courier New", Courier, monospace;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://photos.app.goo.gl/WaCSsTggwayDpqEZ7");
  background-repeat: no-repeat;
  background-position: center;
}

.input-con {
  margin: 50px;
}

.marks-obt {
  padding: 5px;
  border: 1px solid #000;
  outline: 1;
  color: #000;
  text-align: end;
  margin: 50px 0;
}

h1,
label {
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.5);
}

::-webkit-input-placeholder {
  color: #ddd;
  font-family: sans-serif;
  font-style: italic;
  font-size: small;
  text-align: left;
}

.result {
  border: 1px solid #ddd;
  margin: 50px;
  color: #ddd;
  text-align: center;
  font-size: 25px;
}
</style>

<script>
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
  } else if (percentage === "") {
    result.innerText = "";
  } else if (percentage > 100) {
    result.innerText = "Are you nuts?";
    result.style.color = "red";
  } else {
    result.innerText = "Failed";
    result.style.color = "red";
  }
}
</script>

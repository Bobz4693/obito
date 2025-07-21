document.getElementById("checkBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const score = parseFloat(document.getElementById("score").value);
  const result = document.getElementById("result");

  let grade = "";
  let passed = true;

  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 50) {
    grade = "E";
  } else if (score < 50 && score >= 0) {
    grade = "F";
    passed = false;
  } else {
    result.style.color = "red";
    result.innerText = "Please enter a valid score between 0 and 100.";
    return;
  }

  if (name.trim() === "") {
    result.style.color = "red";
    result.innerText = "Please enter your name.";
    return;
  }

  result.style.color = passed ? "green" : "red";
  result.innerHTML = `Hello ${name}! Your grade is ${grade}. You ${passed ? "passed " : "failed "} the test.`;
});  hgzsk1
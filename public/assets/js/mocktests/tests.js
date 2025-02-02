const mockTests = [
  {
    title: "Example Mock Test 1",
    description: "Meta mock test for short-answer questions.",
    subject: "Meta",
    grade: "All",
    quarter: "1-4",
    date: new Date("2024-12-13"),
    author: "Kaiser Chan",
    link: "https://mathematicalcoder.github.io/sparchives/public/mocktests/meta/m1/"
  },
  {
    title: "Step Functions",
    description: "This mock test will help you master the concept of step functions.",
    subject: "Mathematics",
    grade: "9",
    quarter: "3",
    date: new Date("2025-01-20"),
    author: "Kaiser Chan",
    link: "https://mathematicalcoder.github.io/sparchives/public/mocktests/math3/stepfunc/"
  },
  {
    title: "Basic Logarithm Speedrun",
    description: "Can you evaluate the logarithms quickly?",
    subject: "Mathematics",
    grade: "9",
    quarter: "3",
    date: new Date("2025-01-30"),
    author: "Kaiser Chan",
    link: "https://mathematicalcoder.github.io/sparchives/public/mocktests/math3/logspeed/"
  },
  {
    title: "Sample Distribution of the Sample Proportion",
    description: "This mock test will help you master the concept of the sample distribution of the sample proportion.",
    subject: "Statistics",
    grade: "9",
    quarter: "3",
    date: new Date("2025-01-30"),
    author: "Kaiser Chan",
    link: "https://mathematicalcoder.github.io/sparchives/public/mocktests/stat/sdsp/"
  },
  
]

function sortLatest(tests) {
  const sorted = tests.toSorted((test1, test2) => test2.date - test1.date)  // sort by date (latest first)
  return sorted
}

function sortLatestFilter(tests, subject, grade) {
  var sorted = []
  for (let e of tests) {
    if (e.subject == subject && e.grade == grade) {  // filter by subject and grade
      sorted.push(e)
    }
  }
  sorted.sort((test1, test2) => test2.date - test1.date)  // sort by date (latest first)
  return sorted
}

function displayList(tests, id) {
  for (let i = 0; i < tests.length; i++) {
    var e = tests[i];
    var element = document.createElement("div");
    // display row on table
    element.setAttribute("class", "col-sm-4")
    element.innerHTML = `<div class="card">
  <!--<img src="..." class="card-img-top" alt="...">-->
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">By ${e.author} (${e.date.getMonth()+1}/${e.date.getDate()}/${e.date.getFullYear()})</h6>
    <p class="card-text"><span class="badge rounded-pill bg-secondary">${e.subject}</span> <span class="badge rounded-pill bg-secondary">Grade ${e.grade}, Q${e.quarter}</span></p>
    <p class="card-text">${e.description}</p>
    <a href="${e.link}" class="btn btn-primary">Open Mock Test</a>
  </div>
</div>`
    document.getElementById(id).appendChild(element);
  }
}

function coverPage(title, description, timeLimit, noQuestions, hps) {
  // display necessary information in the cover page
  document.getElementById("title").innerText = title;
  document.getElementById("description").innerHTML = description;
  document.getElementById("timeLimit").innerText = timeLimit;
  document.getElementById("noQuestions").innerText = noQuestions;
  document.getElementById("hpsInst").innerText = hps;
}

function timer(timeLimit, questions) {
  var i = 0;
  const timer = setInterval(function(){
    if (i > 60 * timeLimit) {
      clearInterval(timer)
      checkAnswers(questions)
    } else {
      document.getElementById("minutes").innerHTML = Math.floor((60 * timeLimit - i) / 60)  // number of minutes left
      document.getElementById("seconds").innerHTML = Math.floor((60 * timeLimit - i) % 60)  // number of seconds left
      i++
    }
  },1000);  // do every 1 second
}

function showQuestions(details, questions, hps) {
  for (let i = 0; i < questions.length; i++) {
    // show input box, question header, and question as a table row
    var element = document.createElement("tr")
    if (questions[i].type == "essay") {
      element.innerHTML = `<td colspan="2"><span class="mtHeading">Question ${i+1} (${questions[i].points} point/s).</span> ${questions[i].question}<br><span id="p${i+1}Status"><textarea id="p${i+1}Answer" placeholder="Enter answer"></textarea></span><br><br><span id="p${i+1}Exp"></span><br></td>`
    } else {
      element.innerHTML = `<td width="200px" id="p${i+1}Status"><input type="${questions[i].type}" id="p${i+1}Answer" placeholder="Enter answer"></td> <td><span class="mtHeading">Question ${i+1} (${questions[i].points} point/s).</span> ${questions[i].question}<br><br><span id="p${i+1}Exp"></span><br><br><span id="p${i+1}Exp"></span><br></td>`
    }
    document.getElementById("questions").appendChild(element)
  }
  document.getElementById("title").innerText = details.title;  // show title
  document.getElementById("instructions").innerHTML = `
  <ol>
    <li>${details.description}</li>
    <li>This is a ${details.timeLimit}-minute, ${questions.length}-question test. The highest possible score is ${hps} points.</li>
    <li>Answer all questions without any notes, resources, calculators, etc. (Calculators and Jamovi are allowed in Statistics mock tests and calculators are allowed in Chemistry and Physics mock tests unless otherwise stated.)</li>
    <li>Answers are not case sensitive and ignore all whitespace before and after the answer. For example, if the correct answer is “<code>apple</code>”, both “<code>ApPlE</code>” and “<code>   apple  </code>” count as correct answers.</li>
    <li>Where applicable, follow the answer format stated in the questions.</li>
  </ol>
  `  // show instructions
  document.getElementById("downloadPDF").setAttribute("onclick", `window.open("${details.pdfLink}", '_blank')`)  // make pdf download available
}

function hps(questions) {
  var hpsCount = 0;
  for (let i = 0; i < questions.length; i++) {
    hpsCount += questions[i].points
  }
  return hpsCount
}

function checkAnswers(questions) {
  // all post-test functions
  document.getElementById("timer").innerHTML = "Submitted"  // remove timer
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show())  // success message
  
  var score = 0;
  for (let i = 0; i < questions.length; i++) {
    var userAnswer = document.getElementById(`p${i+1}Answer`).value;
    if (questions[i].type == "essay") {
      score += questions[i].points
      document.getElementById(`p${i+1}Status`).innerHTML = `<span class="success">This question will not be graded. You are automatically given ${questions[i].points} point/s.<br>Your Answer: ${userAnswer}</span>`
    }
    else {
      var correctAnswer = questions[i].answer;
      if (userAnswer.trim().toUpperCase() == correctAnswer.trim().toUpperCase()) {
        document.getElementById(`p${i+1}Status`).innerHTML = `<span class="success">Correct! (${questions[i].points} point/s)<br>Answer: ${correctAnswer}</span>`  // display correct message
        score += questions[i].points  // add points
      } else {
        document.getElementById(`p${i+1}Status`).innerHTML = `<span class="danger">Incorrect! (0 points)<br>Your Answer: ${userAnswer}<br>Correct Answer: ${correctAnswer}</span>`  // display incorrect message
      }
    }
    document.getElementById(`p${i+1}Exp`).innerHTML = `<span class="mtHeading">Explanation.</span> ${questions[i].explanation}`
    MathJax.typeset();
  }
  
  // display score on sidebar
  var scoreHeader = document.createElement("span")
  scoreHeader.innerHTML = "Score"
  scoreHeader.setAttribute('class', 'defaultBG')
  document.getElementById("score").appendChild(scoreHeader)
  var scoreContent = document.createElement("span")
  scoreContent.innerHTML = `<span id="score">${score}</span> / <span id="hps">${hps(questions)}</span>`
  scoreContent.setAttribute('class', 'sbLarge')
  document.getElementById("score").appendChild(scoreContent)
}
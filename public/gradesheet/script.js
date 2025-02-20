subjects = [
    {
        name: "Physics 1",
        parts: [
            {name: "Formative Assessments (CC/PS/WS/NB)", weight: 0.25},
            {name: "Long Tests", weight: 0.5},
            {name: "Alternative Assessments", weight: 0.25},
        ]
    },
    {
        name: "Mathematics 3",
        parts: [
            {name: "Quizzes", weight: 0.25},
            {name: "Homeworks / Seatworks", weight: 0.15},
            {name: "Examinations", weight: 0.5},
            {name: "Alternative Assessment", weight: 0.1},
        ]
    },
    
]

function initShow() {
    let subjName = document.getElementById("subjSelect").value;
    let index = 0;
    if (subjName != "Pick a subject!") {
        document.getElementById("subjName").innerHTML = document.getElementById("subjSelect").value;
        for (i in subjects) {if (subjects[i].name == document.getElementById("subjSelect").value) {index = i}}
        document.getElementById("gradeForm").innerHTML = ""
        document.getElementById("grades").innerHTML = `<span class="defaultBG">Final Grade</span><span class="sbHuge" id="finalGrade">???</span>`
        for (i in subjects[index].parts) {
            let x = subjects[index].parts[i]
            document.getElementById("gradeForm").innerHTML +=`<h3>${x.name} (${x.weight * 100}%)</h3>
            <div class="row">
            <div class="col-md-2"><b>Scores</b></div>
            <div class="col-md-10"><input id="scores${i}" placeholder="Enter scores, separated by a comma without a space (e.g. 13,16,14)" class="fullInput"></div>
            </div>
            <div class="row">
            <div class="col-md-2"><b>Denominators</b></div>
            <div class="col-md-10"><input id="denominators${i}" placeholder="Enter denominators, separated by a comma without a space (e.g. 15,20,15)" class="fullInput"></div>
            </div>`
            document.getElementById("grades").innerHTML += `<span class="defaultBG">${x.name} (${x.weight * 100}%)</span><span class="sbLarge" id="grades${i}">???</span>`
        }
        document.getElementById("computeGrade").disabled = false;
    }
}

function computeGrade() {
    var grades = [];
    var index = 0;
    for (i in subjects) {if (subjects[i].name == document.getElementById("subjSelect").value) {index = i}}
    for (i in subjects[index].parts) {
        var x = subjects[index].parts[i]
        var scoresStr = document.getElementById(`scores${i}`).value;
        var denominatorsStr = document.getElementById(`denominators${i}`).value;
        var scoresArr = scoresStr.split(",")
        var denominatorsArr = denominatorsStr.split(",")
        if (subjects[index] == "Physics 1") {
            var scoreRatios = []
            for (let j = 0; j < scoresArr.length; j++) {
                scoreRatios += Number(scoresArr[j]) / Number(denominatorsArr[j])
            }
            var scoresSum = 0
            for (j of scoreRatios) {scoresSum += j}
            var grade = scoresSum / scoresArr.length
        }
        else {
            var scoresSum = 0;
            var denominatorsSum = 0;
            for (j of scoresArr) {scoresSum += Number(j)}
            for (j of denominatorsArr) {denominatorsSum += Number(j)}
            console.log(scoresSum, denominatorsSum)
            var grade = scoresSum / denominatorsSum * 100;
        }
        grades.push(grade);
        document.getElementById(`grades${i}`).innerHTML = grade.toFixed(2);
    }
    var finalGrade = 0;
    for (i in grades) {
        finalGrade += subjects[index].parts[i].weight * grades[i]
    }
    document.getElementById("finalGrade").innerHTML = finalGrade.toFixed(2)
}
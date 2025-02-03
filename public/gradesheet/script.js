subjects = [
    {
        name: "Physics 1",
        parts: [
            {name: "Concept Checks", weight: 0.25},
            {name: "Problem Sets", weight: 0.15},
            {name: "Notebook", weight: 0.5},
            {name: "Long Tests", weight: 0.1},
            {name: "Activities", weight: 0.1},
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
        console.log(index)
        for (i of subjects[index].parts) {
            document.getElementById("gradeForm").innerHTML +=`<h3>${i.name} (${i.weight * 100}%)</h3>
            <table>
            <tr>
            <td width="200px">Scores</td>
            <td><input placeholder="Enter scores, separated by a comma without a space (e.g. 13,16,14)" class="fullInput"></td>
            </tr>
            <td width="200px">Denominators</td>
            <td><input placeholder="Enter denominators, separated by a comma without a space (e.g. 15,20,15)" class="fullInput"></td>
            </tr>
            </table>`
        }
    }
}
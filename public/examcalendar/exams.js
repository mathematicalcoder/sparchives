exams = [
    {
        name: "Math 3 Q3 Quiz 2 (M)",
        date: new Date("2025-01-27"),
        sections: ["Be", "Li", "Mg", "Sr"],
        subject: "Mathematics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Math 3 Q3 Quiz 2 (T)",
        date: new Date("2025-01-28"),
        sections: ["Cs", "K", "Rb", "Na"],
        subject: "Mathematics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Math 3 Q3 Midquarter Exam (M)",
        date: new Date("2025-02-03"),
        sections: ["Be", "Li", "Mg", "Sr"],
        subject: "Mathematics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Math 3 Q3 Midquarter Exam (T)",
        date: new Date("2025-02-04"),
        sections: ["Cs", "K", "Rb", "Na"],
        subject: "Mathematics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Physics 1 Q3 Long Exam 1 (M)",
        date: new Date("2025-02-03"),
        sections: ["Be", "Li", "Rb", "Sr"],
        subject: "Physics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Physics 1 Q3 Long Exam 1 (T)",
        date: new Date("2025-02-04"),
        sections: ["Cs", "Mg", "K", "Na"],
        subject: "Physics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Long Test 1 (Th)",
        date: new Date("2025-02-13"),
        sections: ["Li", "Sr"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Long Test 1 (F)",
        date: new Date("2025-02-14"),
        sections: ["Na"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "SS 3 Q3 Long Test 1 (Th)",
        date: new Date("2025-02-13"),
        sections: ["K", "Rb"],
        subject: "Social Science",
        grade: "9",
        quarter: "3"
    },
    {
        name: "SS 3 Q3 Long Test 1 (F)",
        date: new Date("2025-02-14"),
        sections: ["Li", "Sr"],
        subject: "Social Science",
        grade: "9",
        quarter: "3"
    },
    {
        name: "SS 3 Q3 Quiz 1 (Th)",
        date: new Date("2025-01-30"),
        sections: ["K", "Rb"],
        subject: "Social Science",
        grade: "9",
        quarter: "3"
    },
    {
        name: "SS 3 Q3 Quiz 1 (F)",
        date: new Date("2025-01-31"),
        sections: ["Li", "Sr"],
        subject: "Social Science",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Stat Q3 Lab Activity 1 (Th)",
        date: new Date("2025-01-30"),
        sections: ["Be", "Li", "Mg", "Na"],
        subject: "Statistics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Stat Q3 Lab Activity 1 (F)",
        date: new Date("2025-01-31"),
        sections: ["Cs", "K", "Rb", "Sr"],
        subject: "Statistics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Eng 3 Q3 TGG Quiz 1 (Th)",
        date: new Date("2025-01-30"),
        sections: ["Na"],
        subject: "Statistics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Eng 3 Q3 TGG Quiz 1 (F)",
        date: new Date("2025-01-31"),
        sections: ["Li", "Sr"],
        subject: "Statistics",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Quiz 2 (M)",
        date: new Date("2025-01-27"),
        sections: ["Rb"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Quiz 2 (T)",
        date: new Date("2025-01-28"),
        sections: ["Cs", "K"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Quiz 2 (M)",
        date: new Date("2025-01-27"),
        sections: ["Rb"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Bio 1 Q3 Quiz 2 (T)",
        date: new Date("2025-01-28"),
        sections: ["Cs", "K"],
        subject: "Biology",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Chem 1 Q3 FA 2 (M)",
        date: new Date("2025-02-10"),
        sections: ["Cs","K"],
        subject: "Chemistry",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Chem 1 Q3 FA 2 (T)",
        date: new Date("2025-02-11"),
        sections: ["Rb"],
        subject: "Chemistry",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Chem 1 Q3 FA 3 (Th)",
        date: new Date("2025-02-27"),
        sections: ["Cs","K"],
        subject: "Chemistry",
        grade: "9",
        quarter: "3"
    },
    {
        name: "Chem 1 Q3 FA 3 (F)",
        date: new Date("2025-02-28"),
        sections: ["Rb"],
        subject: "Chemistry",
        grade: "9",
        quarter: "3"
    },
    
]

function filter() {
    var filtered = []
    var today = new Date()
    for (let i in exams) {
        if (today.setHours(0, 0, 0, 0) <= exams[i].date.setHours(0, 0, 0, 0)) {
            filtered.push(exams[i])
        }
    }
    filtered.sort(function(test1, test2) {return test1.date - test2.date})
    return filtered
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
      <h5 class="card-title">${e.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${e.date.getMonth()+1}/${e.date.getDate()}/${e.date.getFullYear()} (${e.sections})</h6>
      <p class="card-text"><span class="badge rounded-pill bg-secondary">${e.subject}</span> <span class="badge rounded-pill bg-secondary">Grade ${e.grade}, Q${e.quarter}</span></p>
    </div>
  </div>`
      document.getElementById(id).appendChild(element);
    }
  }
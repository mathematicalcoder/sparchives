/* REVIEWERS
- title:       The title of the reviewer.
- description: The description for the reviewer.
               HTML supported.
- subject:     The subject that the reviewer belongs to.
               DO NOT include the grade level.
               An example is "Computer Science".
- grade:       The grade level that the reviewer is appropriate for.
- quarter:     The quarter of the school year that the reviewer
               belongs to.
- date:        The date that the reviewer is released.
               The format is new Date(YYYY-MM-DD).
- author:      The author/s of the reviewer.
- link:        The link to the reviewer.
*/

const reviewers = [
  /*{
    title: "JavaScript Array Methods",
    description: ``,
    subject: "Computer Science",
    grade: 9,
    quarter: 2,
    date: new Date("2024-12-19"),
    author: "None",
    link: "#"
  },
  {
    title: "JavaScript Objects",
    description: ``,
    subject: "Computer Science",
    grade: 9,
    quarter: 2,
    date: new Date("2024-12-20"),
    author: "None",
    link: "#"
  },*/
  {
    title: "Floor and Ceiling Functions",
    description: `The floor and ceiling functions are examples of piecewise-defined functions which involve rounding the input down or up to get an integer.`,
    subject: "Mathematics",
    grade: 9,
    quarter: 3,
    date: new Date("2024-12-22"),
    author: "Kaiser Chan",
    link: "https://wdprojsrbattungchan.glitch.me/reviewers/math3/q3/floorceiling.html"
  },
  {
    title: "Signum Function",
    description: `The signum function is another example of a piecewise-defined function which outputs the sign of the input as $-1$, $0$, or $1$.`,
    subject: "Mathematics",
    grade: 9,
    quarter: 3,
    date: new Date("2024-12-23"),
    author: "Kaiser Chan",
    link: "https://wdprojsrbattungchan.glitch.me/reviewers/math3/q3/signum.html"
  },
  
]

/* UTILITY FUNCTIONS */

function sortLatest(reviewers) {
  const sorted = reviewers.toSorted((rev1, rev2) => rev2.date - rev1.date)  // sort by date (latest first)
  return sorted
}

function sortLatestFilter(reviewers, subject, grade) {
  var sorted = []
  for (let e of reviewers) {
    if (e.subject == subject && e.grade == grade) {  // filter by subject and grade
      sorted.push(e)
    }
  }
  sorted.sort((rev1, rev2) => rev2.date - rev1.date)  // sort by date (latest first)
  return sorted
}

function display(sorted, id) {
  for (let i = 0; i < 6; i++) {
    var r = sorted[i]
    // post reviewer cards on the page
    var revCard = document.createElement("div")
    revCard.setAttribute("class", "col-sm-4")
    revCard.innerHTML = `<div class="card">
    <!--<img src="..." class="card-img-top" alt="...">-->
    <div class="card-body">
      <h5 class="card-title">${r.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">By ${r.author} (${r.date.getMonth()+1}/${r.date.getDate()}/${r.date.getFullYear()})</h6>
      <p class="card-text"><span class="badge rounded-pill bg-secondary">${r.subject}</span> <span class="badge rounded-pill bg-secondary">Grade ${r.grade}, Q${r.quarter}</span></p>
      <p class="card-text">${r.description}</p>
      <a href="${r.link}" class="btn btn-primary">Open Reviewer</a>
    </div>
  </div>`
    document.getElementById(id).appendChild(revCard)
  }
}
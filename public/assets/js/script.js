const domain = "https://mathematicalcoder.github.io/sparchives/public";

// display navbar
document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="${domain}">SPARChives</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link disabled" href="${domain}/examcalendar">Exam Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${domain}/reviewers">Reviewers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="${domain}/mocktests">Mock Tests</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="${domain}/gradesheet">Gradesheet</a>
      </li>
    </ul>
  </div>
</nav>`;

// display footer
document.getElementById("footer").innerHTML += `<p><b>SPARChives</b>. Website made by Kaiser Chan and Schiel Battung for PSHS-MC SPARC 2028.</p>`;
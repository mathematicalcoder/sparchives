// display navbar
document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SPARChives</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link disabled" href="examcalendar">Exam Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="reviewers">Reviewers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="mocktests">Mock Tests</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="gradesheet">Gradesheet</a>
      </li>
    </ul>
  </div>
</nav>
`;

// display footer
document.getElementById("footer").innerHTML += `<p>SPARChives. &copy; 2024 PSHS-MC SPARC 2028</p>`;
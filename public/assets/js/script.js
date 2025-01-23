// display navbar
document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-sm navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://wdprojsrbattungchan.glitch.me/">SPARChives</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://wdprojsrbattungchan.glitch.me/examcalendar">Exam Calendar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://wdprojsrbattungchan.glitch.me/reviewers">Reviewers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://wdprojsrbattungchan.glitch.me/mocktests">Mock Tests</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="https://wdprojsrbattungchan.glitch.me/gradesheet">Gradesheet</a>
      </li>
    </ul>
  </div>
</nav>`;

// display footer
document.getElementById("footer").innerHTML += `<p><b>SPARChives</b>. Website made by Kaiser Chan and Schiel Battung for PSHS-MC SPARC 2028.</p>`;
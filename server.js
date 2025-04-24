const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/portal', (req, res) => {
    res.render('portalHome.hbs', {name: "Kaiser Chan", member: true, head: true});
  });

app.get('/portal/add/rev', (req, res) => {
    res.render('revContrib.hbs');
});

app.get('/portal/adminReg', (req, res) => {
  res.render('adminMemberReg.hbs');
});

app.get('/portal/requestForm', (req, res) => {
  res.render('requestForm.hbs');
});

app.get('/portal/members', (req, res) => {
  try {
    const members = JSON.parse(fs.readFileSync(membersFilePath));
    const memberList = Object.values(members);
    res.render('memberList.hbs', {members: memberList});
  } catch (error) {
    res.status(500).send('Error loading member list!');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// initialize members.json
const membersFilePath = path.join(__dirname, 'data', 'members.json');
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  console.log('Creating data directory...');
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(membersFilePath)) {
  console.log('Creating members.json file...');
  fs.writeFileSync(membersFilePath, '{}');
}

// initialize revs.json
const revsFilePath = path.join(__dirname, 'data', 'revs.json');
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  console.log('Creating data directory...');
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(revsFilePath)) {
  console.log('Creating revs.json file...');
  fs.writeFileSync(revsFilePath, '{}');
}

// handle member registration
app.post('/portal/adminReg/submit', (req, res) => {
  const { surname, given, mi, section } = req.body;
  const name = `${surname.toUpperCase()}, ${given} ${mi}.`;
  console.log(`Registering ${name} (${section}) as a member...`);

  if (!surname || !given || !mi || !section) {
    console.error("At least one required field is missing! ", { surname, given, mi, section });
    return res.status(400).send("At least one required field is missing!")
  }

  try {
    const members = JSON.parse(fs.readFileSync(membersFilePath));
    const key = `${surname.toUpperCase()}_${section}`;
    members[key] = {surname, given, mi, section};
    fs.writeFileSync(membersFilePath, JSON.stringify(members, null, 2));
    res.redirect('/portal/members');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering the member!');
  }
});

// handle reviewer submission
app.post('/portal/add/rev/submit', (req, res) => {
  const { author, verifier, date, course, title, content } = req.body;
  console.log(`Registering the reviewer ${title} by ${author}...`);

  if (!author || !verifier || !date || !title || !content) {
    console.error("At least one required field is missing! ", { author, verifier, date, course, title, content });
    return res.status(400).send("At least one required field is missing!")
  }

  try {
    const revs = JSON.parse(fs.readFileSync(revsFilePath));
    revs[title] = {author, verifier, date, course, title, content};
    fs.writeFileSync(revsFilePath, JSON.stringify(revs, null, 2));
    res.redirect('/portal/add/rev');
  } catch(error) {
    console.error(error);
    res.status(500).send('Error registering the reviewer!');
  }
})

// reviewers page
app.get('/reviewers', (req, res) => {
  try {
    const reviewers = JSON.parse(fs.readFileSync(revsFilePath));
    const revList = Object.values(reviewers);
    res.render('revs.hbs', {revs: revList});
  } catch (error) {
    res.status(500).send('Error loading member list!');
  }
});

// specific reviewer page
app.get('/reviewer', (req, res) => {
  const { title } = req.query;
  const reviewers = JSON.parse(fs.readFileSync(revsFilePath));
  const rev = reviewers[title];
  const author = rev["author"];
  const verifier = rev["verifier"];
  const date = rev["date"];
  const course = rev["course"];
  const content = rev["content"];
  try {
    res.render('reviewer.hbs', {author: author, verifier: verifier, date: date, course: course, title: title, content: content});
  } catch(error) {
    console.error("Reviewer not found! ", { author, verifier, date, course, title, content });
    return res.status(404).send('Reviewer not found!');
  }
})
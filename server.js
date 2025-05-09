const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// middleware
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'bTMc9R1I/LHscxaBRR0fGzMD8U7ukt+11RtMaDyenbgPFgcUhcWtYTpVWSM=',  // randomly generated base64 characters
  resave: false,
  saveUninitialized: false
}))

// helpers - credit to Sir Roy C. for the below code
function getUsers() {
  if (!fs.existsSync(usersFilePath)) {
    return []
  }
  const data = fs.readFileSync(usersFilePath, 'utf8')
  return JSON.parse(data)
}

function saveUsers(users) {
  const dirPath = path.dirname(usersFilePath)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
}

function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

// Define a route
app.get('/portal', requireLogin, (req, res) => {
    res.render('portalHome.hbs', {username: req.session.userId});
});

app.get('/portal/rev/add', requireLogin, (req, res) => {
    res.render('revContrib.hbs');
});

app.get('/portal/rev/edit', requireLogin, (req, res) => {
  const { title } = req.query;
  const revs = JSON.parse(fs.readFileSync(revsFilePath));
  const reviewer = revs[title];
  res.render('revEdit.hbs', {title: title, author: reviewer.author, verifier: reviewer.verifier, date: reviewer.date, course: reviewer.course, content: reviewer.content});
});

app.get('/portal/rev/actionSelect', requireLogin, (req, res) => {
  const { title } = req.query;
  const revs = JSON.parse(fs.readFileSync(revsFilePath));
  res.render('revActionSelect.hbs', {reviewers: revs});
});

app.get('/portal/mt/add', requireLogin, (req, res) => {
  res.render('mtContrib.hbs');
});

app.get('/portal/adminReg', requireLogin, requireLogin, (req, res) => {
  res.render('adminMemberReg.hbs');
});

app.get('/portal/requestForm', requireLogin, (req, res) => {
  res.render('requestForm.hbs');
});

app.get('/portal/members', requireLogin, (req, res) => {
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

// initialize data folder
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  console.log('Creating data directory...');
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// initialize users.json
const usersFilePath = path.join(__dirname, 'data', 'users.json')
if (!fs.existsSync(usersFilePath)) {
  console.log('Creating users.json file...')
  fs.writeFileSync(usersFilePath, '[]');
}

// initialize members.json
const membersFilePath = path.join(__dirname, 'data', 'members.json');
if (!fs.existsSync(membersFilePath)) {
  console.log('Creating members.json file...');
  fs.writeFileSync(membersFilePath, '{}');
}

// initialize revs.json
const revsFilePath = path.join(__dirname, 'data', 'revs.json');
if (!fs.existsSync(revsFilePath)) {
  console.log('Creating revs.json file...');
  fs.writeFileSync(revsFilePath, '{}');
}

// initialize mocktests.json
const mtFilePath = path.join(__dirname, 'data', 'mocktests.json');
if (!fs.existsSync(path.join(mtFilePath))) {
  console.log('Creating mocktests.json file...');
  fs.writeFileSync(mtFilePath, '{}');
}

// handle member registration
app.post('/portal/adminReg/submit', requireLogin, (req, res) => {
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
app.post('/portal/rev/add/submit', requireLogin, (req, res) => {
  const { author, verifier, date, course, title, description, content } = req.body;
  console.log(`Registering the reviewer ${title} by ${author}...`);

  if (!author || !verifier || !date || !title || !content) {
    console.error("At least one required field is missing! ", { author, verifier, date, course, title, description, content });
    return res.status(400).send("At least one required field is missing!")
  }

  try {
    const revs = JSON.parse(fs.readFileSync(revsFilePath));
    revs[title] = {author, verifier, date, course, title, description, content};
    fs.writeFileSync(revsFilePath, JSON.stringify(revs, null, 2));
    res.redirect('/portal');
  } catch(error) {
    console.error(error);
    res.status(500).send('Error registering the reviewer!');
  }
})

// handle reviewer action selection
app.post('/portal/rev/actionSelect/submit', requireLogin, (req, res) => {
  const { title, action } = req.body
  if (!title || !action) {
    console.error("At least one required field is missing! ", { title, action });
    return res.status(400).send("At least one required field is missing!")
  }
  if (action == "edit") {
    res.redirect(`/portal/rev/edit?title=${title}`)
  } else if  (action == "delete") {
    try {
      const revs = JSON.parse(fs.readFileSync(revsFilePath));
      delete revs[title];
      fs.writeFileSync(revsFilePath, JSON.stringify(revs, null, 2));
      res.redirect('/portal');
    } catch(error) {
      console.error(error);
      res.status(500).send('Error deleting the reviewer!');
    }
  } else if (action == "release") {
    try {
      const revs = JSON.parse(fs.readFileSync(revsFilePath))
      revs[title].released = true;
      fs.writeFileSync(revsFilePath, JSON.stringify(revs, null, 2))
      res.redirect('/portal')
    } catch(error) {
      console.error(error);
      res.status(500).send('Error releasing the reviewer!');
    }
  }
})

// handle reviewer edition
app.post('/portal/rev/edit/submit', requireLogin, (req, res) => {
  const { author, verifier, date, course, ogTitle, title, description, content } = req.body;
  console.log(`Editing the reviewer ${ogTitle} by ${author}...`);

  if (!author || !verifier || !date || !title || !content) {
    console.error("At least one required field is missing! ", { author, verifier, date, course, ogTitle, title, description, content });
    return res.status(400).send("At least one required field is missing!")
  }

  try {
    const revs = JSON.parse(fs.readFileSync(revsFilePath));
    delete revs[ogTitle];
    revs[title] = {author, verifier, date, course, title, description, content};
    fs.writeFileSync(revsFilePath, JSON.stringify(revs, null, 2));
    res.redirect('/portal');
  } catch(error) {
    console.error(error);
    res.status(500).send('Error editing the reviewer!');
  }
})

// handle mock test addition

app.post('/portal/mt/add/submit', requireLogin, (req, res) => {
  const rawMtData = req.body;
  if (!(rawMtData.author && rawMtData.verifier && rawMtData.date && rawMtData.course && rawMtData.title&& rawMtData.timeLimit&& rawMtData.description)) {
    console.error("At least one required field is missing! ", { title });
    return res.status(400).send("At least one required field is missing!")
  }
  try { 
    const mtData = {};
    mtData.author = rawMtData.author;
    mtData.verifier = rawMtData.verifier;
    mtData.date = rawMtData.date;
    mtData.course = rawMtData.course;
    mtData.title = rawMtData.title;
    mtData.timeLimit = rawMtData.timeLimit;
    mtData.description = rawMtData.description;
    mtData.instructions = rawMtData.instructions;
    let questions = [];
    let qnExists = true;
    let qnCounter = 1;
    while (qnExists) {
      let question = {};
      question.statement = rawMtData[`statement${qnCounter}`];
      question.answer = rawMtData[`answer${qnCounter}`];
      question.points = rawMtData[`points${qnCounter}`];
      question.explanation = rawMtData[`explanation${qnCounter}`];
      questions.push(question);
      qnCounter += 1;
      if (!rawMtData[`statement${qnCounter}`]) {
        qnExists = false;
      }
    }
    mtData.questions = questions;
    const mockTests = JSON.parse(fs.readFileSync(mtFilePath));
    mockTests[rawMtData.title] = mtData;
    fs.writeFileSync(mtFilePath, JSON.stringify(mockTests, null, 2));
    res.redirect('/portal');
  } catch(error) {
    console.error(error);
    res.status(500).send('Error registering the mock test!');
  }
})

// reviewers page
app.get('/reviewers', (req, res) => {
  try {
    const reviewers = JSON.parse(fs.readFileSync(revsFilePath));
    const revList = Object.values(reviewers);
    revList.sort(function(a,b){return new Date(b.date) - new Date(a.date)});
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

// login page
app.get('/login', (req, res) => {
  res.render('login.hbs')
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.username === username)

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = username
    res.redirect('/portal')
  } else {
    res.render('login.hbs', { error: 'Please check your username and/or password.' })
  }
})

// logout page
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})

// register page
app.get('/register', (req, res) => {
  res.render('register.hbs')
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  const users = getUsers();
  if (users.find(u => u.username === username)) {
    return res.render('register.hbs', {error: 'The username already exists.'})
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({username, password: hashedPassword})
  saveUsers(users)
  res.redirect('/login')
})

// change password page
app.get('/changePassword', requireLogin, (req, res) => {
  res.render('changePassword.hbs')
})

app.post('/changePassword', requireLogin, async (req, res) => {
  const { currentPassword, newPassword } = req.body
  const users = getUsers()
  const user = users.find(u => u.username === req.session.userId)
  if (await bcrypt.compare(currentPassword, user.password)) {
    user.password = await bcrypt.hash(newPassword, 10)
    saveUsers(users)
    res.redirect('/portal')
  } else {
    res.render('/changePassword', {error: 'The current password is incorrect.'})
  }
})
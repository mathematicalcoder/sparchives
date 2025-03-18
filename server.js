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

// initialize members.js
const membersFilePath = path.join(__dirname, 'data', 'members.json');
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  console.log('Creating data directory...');
  fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(membersFilePath)) {
  console.log('Creating members.json file...');
  fs.writeFileSync(membersFilePath, '{}');
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
const express = require('express');
const app = express();
const port = 5000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/portal', (req, res) => {
    res.render('portalHome.hbs', {name: "Kaiser Chan", member: true, head: true});
  });

app.get('/portal/add/rev', (req, res) => {
    res.render('revContrib.hbs');
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
  const { name, section } = req.body;
  console.log(`Registering ${name} (${section}) as a member...`);

  if (!name || !section) {
    console.error("At least one required field is missing! ", { name, section });
    return res.status(400).send("At least one required field is missing!")
  }

  try {
    // WIP
  } catch (error) {
    // WIP
  }
});
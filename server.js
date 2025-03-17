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

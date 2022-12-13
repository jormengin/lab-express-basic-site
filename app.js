const express = require("express"); // require the express.js module
const app = express(); // create an instance of the express app
app.use(express.static('public'));

// define routes for the different pages of your website
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/about.html");
});

app.get("/photos", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/photos-kanye.html");
});

app.get("/works", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/works-kanye.html");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});


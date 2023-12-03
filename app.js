let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/search", (req, res) => {
  const query = req.query.query;
  const categories = req.query.categories;
  res.send(`This search page ${query}  : ${categories} `);
});

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server started");
  }
});

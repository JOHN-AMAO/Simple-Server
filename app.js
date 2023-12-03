let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/api/:name/:id", (req, res) => {
  const name = req.params.name;
  const id = req.params.id;
  res.send(`user information: name : ${name} id:${id}`);
});

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server started");
  }
});

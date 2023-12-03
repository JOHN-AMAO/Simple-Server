let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("HI");
});
app.get("/api/:id/:id2", (req, res) => {
  console.log(req.params);
  res.json("Hey John");
});

app.get("/ap/v1/query", (req, res) => {
  console.log(req.query);
  res.send("Hello world");
});

app.listen(8000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server started");
  }
});

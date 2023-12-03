let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/EduFord/index.html");
});
app.use(express.static("./EduFord"));

app.listen(5000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server started");
  }
});

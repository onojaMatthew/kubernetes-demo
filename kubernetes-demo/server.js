const express = require("express");
const port = process.env.PORT || 4500;

const app = express();

app.get("/", (req, res, next) => {
  res.send("Greetings from Express API");
});

app.get("/hello", (req, res, next) => {
  res.send("Hello everyone for taking this course");
})

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});

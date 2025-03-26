const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello, CI/CD with GitHub Actions!");
});


app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Ali" }, { id: 2, name: "Reza" }]);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; 


const express = require("express");
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get();

app.get();

app.get();
app.get();
app.post();
app.post();
app.post();
app.post();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

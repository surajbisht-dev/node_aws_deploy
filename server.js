const express = require("express");

const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Nodejs AWS Deployment" });
});

app.get("/api/get/user", (req, res) => {
  res.send({
    name: "Suraj Bisht",
    email: "surajbisht1906@hmail.com",
    role: "Developer + DevOps",
  });
});

app.listen(9000, (req, res) => {
  console.log("Server running on port 9000");
});

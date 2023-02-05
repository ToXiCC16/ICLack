const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user"); // Import the user model

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/mydatabase", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// CREATE
app.post("/users", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(() => res.json("User added successfully"))
    .catch(err => res.status(400).json("Error: " + err));
});

// READ
app.get("/users", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// UPDATE
app.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(() => res.json("User updated successfully"))
    .catch(err => res.status(400).json("Error: " + err));
});

// DELETE
app.delete("/users/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted successfully"))
    .catch(err => res.status(400).json("Error: " + err));
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

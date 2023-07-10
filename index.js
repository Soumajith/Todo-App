const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json object
app.use(express.json());

const todoRoutes = require("./routes/todo");

//mount todo
app.use("/api/v1", todoRoutes);

//Start the server
app.listen(PORT, () => {
  console.log("Server started at " + PORT);
});

//connect database
const dbconnect = require("./config/database");
dbconnect();

//default route
app.get("/", (request, response) => {
  response.send("<h1>This is the homepage</h1>");
});

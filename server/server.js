// Importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Inititating Express
const app = express();

// Environment Variables
require("dotenv").config();

// Connecting to Database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 3000, () => {
      console.log("Connection to the Database was established!");
    })
  )
  .catch((error) => console.log("Database connection error:", error));

// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

// CORS
app.use(
  cors({
    origin: "*",
  })
);

// Routes
const routes = require("./routes/routes");
app.use(routes);

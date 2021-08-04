const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

// Import routes
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");

app.use(bodyParser.json());

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use(cors());

app.get("/", (req, res) => {
  res.send("We are home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB!!")
);

// How do we start listening to the server? It's as easy as the below line of code:
app.listen(3000);

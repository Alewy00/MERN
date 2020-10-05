const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB AITMO"))
    .catch(err => console.log(err));
    

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/api/users");
const quizzes = require("./routes/api/quizzes");


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use("/api/users", users);
app.use("/api/quizzes", quizzes);

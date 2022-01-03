const express = require("express");
const path = require("path")
const router = express.Router();
const data = require("./data/data.json");



const app = express();
//Middleware

app.set("view engine", "pug");
app.use("/static", express.static("public"));


/* Express middleware for accessing the req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
const indexRoutes = require('./routes/index.js');
const projectRoutes = require('./routes/projects.js');

app.use(indexRoutes);
app.use('/projects', projectRoutes);


module.exports = router;

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});

const express = require("express");
const path = require("path")
const router = express.Router();
const { data } = require("../data/data.json");
const { projects } = data;


const app = express();
//Middleware

app.set("view engine", "pug");
app.use("/static", express.static("public"));


/* Express middleware for accessing the req.body */
pp.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
const indexRoutes = require('./routes/index.js');
const projectRoutes = require('./routes/projects.js');


//error handlers 
app.use((err, req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    console.err("Page not found");
    next(err);
  });

  app.use(function (err, req, res, next) {
    err.status = 500;
    err.message("Something went wrong!");
  });



module.exports = router;

app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});

const express = require("express");

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

//error handlers 
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  console.error("Page not found");
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});




app.listen(3000, () => {
    console.log("The application is running on localhost:3000!")
});
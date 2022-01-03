const express = require('express');
const router = express.Router();
const { projects } = data;


router.get("/projects/:id", (req, res, next) =>{
   return res.render('projects', projects[req.params.id]);
});

//error handlers 
app.use((err, req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    console.error("Page not found");
    next(err);
  });
  
  app.use(function (err, req, res, next) {
    err.status = 500;
    error.message("Something went wrong!");
  });

module.exports = router;
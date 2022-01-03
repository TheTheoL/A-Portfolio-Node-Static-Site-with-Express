const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("/index", { data });
});

router.get("/about", (req, res) => {
    res.render("about");
    
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
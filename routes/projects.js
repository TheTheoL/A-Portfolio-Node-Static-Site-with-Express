const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


router.get("/:id", (req, res, next) =>{
    if(projects[req.params.id]) {
        return res.render('project', {project: projects[req.params.id]});
    } else {
        const err = new Error("Page not found");
        err.status = 404;
        console.error("Page not found");
        next(err);
    }
});
    
   




module.exports = router;
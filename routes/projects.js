const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');


router.get("/:id", (req, res, next) =>{
   return res.render('projects', projects[req.params.id]);
});



module.exports = router;
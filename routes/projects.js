
router.get("/project/:id", (req, res, next) =>{
    res.render(req.param.id);
});

module.exports = router;
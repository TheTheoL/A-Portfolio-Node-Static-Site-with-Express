
router.get("/", (req, res) => {
    res.render("/index", { data });
});

router.get("/about", (req, res) => {
    res.render("about");
    
});

module.exports = router;
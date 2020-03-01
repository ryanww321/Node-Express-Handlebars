var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        res.render("index", { burger: data });
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create({
        burger_name: req.body.name,
        devoured: 0
    }, function (result) {
        // if(result.affectedRows == 0){
        //     res.status(500).end();
        // }
        // res.status(200).end();
        res.json({ id: result.insertId });

    });
});

router.put("/api/burgers/:id", (req, res) => {
    burger.update({ devoured: 1 }, `id = ${req.params.id}`, function (result) {
        if (result.affectedRows == 0) {
            res.status(500).end();
        }
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id", (req, res) => {
    burger.delete(`id = ${req.params.id}`, function (result) {
        if (result.affectedRows == 0) {
            res.status(500).end();
        }
        res.status(200).end();
    })
})

module.exports = router;
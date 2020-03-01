var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        res.render("index", {burger: data});
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne({
        burger_name: req.body.name,
        devoured: 0
    }, function(result){
        if(result.affectedRows == 0){
            res.status(500).end();
        }
        res.status(200).end();
    });
});

router.patch("/api/burgers/:id", (req, res) => {
    burger.updateOne({devoured: 1}, `id = ${req.params.id}`, function(result){
        if(result.affectedRows == 0){
            res.status(500).end();
        }
        res.status(200).end();
    })
});

router.delete("/api/burgers/:id", (req, res) => {
    burger.deleteOne(`id = ${req.params.id}`, function(result){
        if(result.affectedRows == 0){
            res.status(500).end();
        }
        res.status(200).end();
    })
})

module.exports = router;
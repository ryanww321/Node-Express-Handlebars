var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

// router.get("/", (req, res) => {
//     burger.all((data) => {
//         res.render("index", { burger: data });
//     });
// });
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    // burger.create({
    //     burger_name: req.body.name,
    //     devoured: 0
    // }, function (result) {
    //     res.json({ id: result.insertId });

    // });
    // });
    burger.create([
        "Burger", "Devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




// burger.update({ devoured: 1 },
//     `id = ${req.params.id}`, function (result) {
//         if (result.affectedRows == 0) {
//             res.status(500).end();
//         }
//         res.status(200).end();
//     })
// });

router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
//     burger.delete(`id = ${req.params.id}`, function (result) {
//         if (result.affectedRows == 0) {
//             res.status(500).end();
//         }
//         res.status(200).end();
//     })
// })

module.exports = router;
const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([req.body.add_burger], () => {
        res.redirect("/");
    });
});

router.put('/api/burgers/:id', (req, res) => {

    let condition = 'id= ' + req.params.id;
    console.log("condition Burger ID: ", condition);

    burger.update(condition, () => {
       
        res.redirect("/");
    });

});

module.exports = router;


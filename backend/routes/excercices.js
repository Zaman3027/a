const router = require('express').Router();
let Excercise = require('../models/excerciseModel');

router.route('/').get((req,res)=>{
    Excercise.find()
    .then(excercise=>res.json(excercise))
    .catch(err=>res.status(400).json('Error '+err));
})


router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newExcercise.save().then(
        res.json("Excersice added")
    ).catch(err=>{
        res.status(400).json(err);
    })
    
});

module.exports = router;
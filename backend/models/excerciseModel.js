const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const excerciseSchema = Schema({
    username : {type:String,require:true},
    description : {type:String,require:true},
    duration:{type:Number,require:true},
    data:{type:Date,require:true}
},{
    timestamps:true,
});

const Excercise = mongoose.model('Excercise',excerciseSchema);

module.exports = Excercise;
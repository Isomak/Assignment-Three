let mongoose = require('mongoose');

// create a model class
let trackerModel = mongoose.Schema({
    "AssignmentNumber":String,
    "Class":String,
    "DueDate": String,
    "AssignmentDescription":String,
},
{
    collection:"assignments"
});
module.exports = mongoose.model('Tracker',trackerModel);

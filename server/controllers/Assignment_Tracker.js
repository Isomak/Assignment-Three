var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Tracker = require('../models/Assignment_Tracker');

module.exports.DislayTrackerlist = async (req,res,next)=>{ //< Mark function as async
    try{
       var Trackerlist = await Tracker.find(); //< Use of await keyword
       res.render('tracker/list', {
          title: 'Assignment Tracker', 
          Trackerlist: Trackerlist
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('tracker/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddTracker = async (req,res,next)=>{
    try{
        res.render('tracker/add',
        {
            title:'Add Assignment'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('tracker/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessTracker = async (req,res,next)=>{
    try{
        let newTracker = Tracker({
            "AssignmentNumber":req.body.AssignmentNumber,
            "Class": req.body.Class,
            "DueDate": req.body.DueDate,
            "AssignmentDescription": req.body.AssignmentDescription,
        });
        Tracker.create(newTracker).then(() =>{
            res.redirect('/trackerslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('tracker/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditTracker = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const trackerToEdit = await Tracker.findById(id);
    res.render('tracker/edit',
    {
        title:'Edit Assignments',
        Tracker:trackerToEdit
    })
}
catch(error){
    console.error(err);
    res.render('tracker/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditTracker = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedTracker = Tracker({
            "_id":id,
            "AssignmentNumber":req.body.AssignmentNumber,
            "Class": req.body.Class,
            "DueDate": req.body.DueDate,
            "AssignmentDescription": req.body.AssignmentDescription,
        });
        Tracker.findByIdAndUpdate(id,updatedTracker).then(()=>{
            res.redirect('/trackerslist')
        });
    }
    catch(error){
        console.error(err);
        res.render('tracker/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteTracker = (req,res,next)=>{
    try{
        let id = req.params.id;
        Tracker.findByIdAndDelete(id).then(() =>
        {
            res.redirect('/trackerslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('tracker/list',
        {
            error: 'Error on the server'
        });
    }
}

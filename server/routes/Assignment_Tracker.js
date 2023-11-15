var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Tracker = require('../models/Assignment_Tracker');
let TrackerController = require('../controllers/Assignment_Tracker')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', TrackerController.DislayTrackerlist);
/* Get route for Add Book page --> Create */
router.get('/add', TrackerController.AddTracker); 
/* Post route for Add Book page --> Create */
router.post('/add', TrackerController.ProcessTracker);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', TrackerController.EditTracker);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', TrackerController.ProcessEditTracker);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', TrackerController.DeleteTracker);
 module.exports = router;
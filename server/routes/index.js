var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/files/index.ejs', { 
    title: 'Home'  
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('../views/files/index.ejs', { 
    title: 'Home'  
  });
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('../views/files/about.ejs', { 
    title: 'About Us'  
  });
});


/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products'  
  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services'  
  });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('../views/files/contact.ejs', { 
    title: 'Contact'  
  });
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('../views/files/projects.ejs', { 
    title: 'Services'  
  });
});

/* GET Assignments page. */
router.get('/trackerlist', function(req, res, next) {
  res.render('../views/files/projects.ejs', { 
    title: 'Services'  
  });
});

module.exports = router;

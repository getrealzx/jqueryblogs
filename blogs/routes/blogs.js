const express = require('express');
const router = express.Router();
const db = require('../models/database.js');


router.get('/blogs', (req, res) => {
    
    db.query("SELECT * FROM blogs, authors WHERE blogs.authorid= authors.id")

    
    .then(results => {
        //results is an array of objects
        console.log(results);
        res.render("blogs", {
          blogs: results
        });
      });

})


module.exports = router;
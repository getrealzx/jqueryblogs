const express = require('express');
const router = express.Router();
const db = require('../models/database.js');


router.get('/', (req, res) => {
    
    db.query("SELECT * FROM blogs, authors WHERE blogs.authorid= authors.id")

    
    .then(results => {
        //results is an array of objects
        console.log(results);
        res.render("index.ejs", {
          blogs: results
        });

    //         .catch((error) => {
    //         console.log(error);
    //         res.send('error.')
    // })
      });

})



module.exports = router;

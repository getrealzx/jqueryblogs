const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
let bodyParser = require('body-parser');



router.use(bodyParser.urlencoded({ extended: false }));

router.get('/editblog', (req, res) => {
    // res.render('editblog');

    // can do as array or nest call
    let cat = db.query("SELECT * FROM categories");
    let aut = db.query("SELECT * FROM authors");
    
    Promise.all([cat, aut])
    .then(results => { //result is an arr [resultofCat, resultofAut]
        //results is an array of objects
        console.log(results);
        res.render("editblog", {  //render editblog page
          categories: results[0],
          authors: results[1],

        });
      });

    ////or v2
// db.query('SELECT * FROM categories')
//     .then((catResults) => {
//       db.query('SELECT * FROM authors')
//         .then((authResults) => {
//           res.render('editblogs.ejs', {
//             authors: authResults,
//             categories: catResults
//           })
//         })
//         .catch((error) => {
//           console.log("error in authors query: ", error);
//         })
//     })
//     .catch((error) => {
//       console.log("error in category query", error);
//     })


})






router.post('/editblog', (req, res) => {

    let title = req.body.title;
    let categoryid = req.body.categoryid;
    let authorid = req.body.authorid;
    let summary = req.body.summary;
    let body = req.body.body;
    // let postdate = req.body.postdate;


    db.none('INSERT INTO blogs(title, categoryid, authorid, summary, body) VALUES($1, $2, $3, $4, $5)', 
    [title, categoryid, authorid, summary, body])
    // res.send('newdishes sent')
    .then(() => {
        res.redirect('/blogs')
    })

    .catch((err) => {
        res.send(err)
    })
})


module.exports = router;
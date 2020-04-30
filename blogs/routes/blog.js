const express = require('express');
const router = express.Router();
const db = require('../models/database.js');


// router.get('/blog/:id', (req, res) => {

//     let id =  req.params.id; //??

//     // db.query(`SELECT * FROM blogs WHERE blogs id=$1`, [id])
    
//     db.query(`SELECT * FROM blogs WHERE blogs id=$1`,[id])
//         .then((results) => {
            
//             res.render("blog.ejs",{
//                 blog:results[0] // an obj
//             })

//         })   

    
// })

router.get('/blog/:id', (req, res)=>{
    let id = req.params.id;
    db.query('SELECT * FROM blogs WHERE id=$1', [id])
    .then((results)=>{
        console.log(results);
        res.render('blog.ejs',{
            blog: results[0] // this is an object -this is one record in our database
        })
        .catch((error)=>{
            console.log(error)
        })
    })
});


module.exports = router;
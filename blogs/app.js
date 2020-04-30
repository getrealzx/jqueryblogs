const express = require('express');
const app = express();

// const promise = require('bluebird');
let PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/blogs'));
app.use(require('./routes/editblog'));
app.use(require('./routes/'));
app.use(require('./routes/blog'));




app.listen(PORT,() => {
    console.log(`Port ${PORT} is running`);
})
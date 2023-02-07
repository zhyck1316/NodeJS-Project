const express = require('express');

const app = express();

app.set('view engine', 'ejs');
//!  This is how you point it to a specific folder
app.set('views', 'html_pages');

app.listen(3000); 

app.get('/', (req, res) => {
    res.render('index');
    //  res.send('<p>Homepage</p>');

});

app.get('/about', (req, res) => {
    res.render('about');
    // res.send('<p>Homepage</p>');

});

app.get('/html_pages/create', (req,res) => {
    res.render('create');
})
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.use((req, res) => {
    res.status(404).render('404');
})


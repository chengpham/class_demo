const express = require('express')
const app = express()
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(logger('dev'))

let list=[];
app.use((req, res, next) => {
    res.locals.language = ""
    if (req.cookies.language) {
      res.locals.language = req.cookies.language
    }
    res.locals.notes = []
    if (req.cookies.notes) {
        res.locals.notes = list
    }
    res.locals.username = "";
    if (req.cookies.username) {
      res.locals.username = req.cookies.username
    }
    next();
  })

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/language', (req,res)=>{
    res.render('language')
})
app.post('/language', (req, res) => {
    if (req.body.language==''){
        res.clearCookie('language');
    }
    res.cookie('language', req.body.language, { maxAge: 604800000 });
    res.redirect('/');
})
app.get('/notes', (req,res)=>{
    res.render('notes')
})
app.get('/reminder', (req,res)=>{
    res.render('reminder')
})
app.post('/reminder', (req, res) => {
    if (req.body.notes){
        res.cookie('notes', req.body.notes, { maxAge: 604800000 });
    }
    list.push(req.body.notes)
    res.redirect('/notes',);
})
app.post('/clear', (req, res) => {
    arr = []
    res.clearCookie('notes');
    res.redirect('/notes');
})
app.post('/login', (req, res) => {
    res.cookie('username', req.body.username, { maxAge: 604800000 });
    res.redirect('/');
    })
app.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
})

const ADDRESS = 'localhost';
const PORT = 3000;
app.listen(PORT, ADDRESS, ()=>{
    console.log(`Server listening on ${ADDRESS}:${PORT}`)
})
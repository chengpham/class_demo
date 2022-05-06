const express = require('express')
const app = express()
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req,res)=>{
    if (req.body && req.body._method){
        const method = req.body._method
        return method
    }
}))
app.use(cookieParser())

app.use(logger('dev'))

app.use((req, res, next) => {
    // console.log('🍪:', req.cookies);
    res.locals.username = "";
    if (req.cookies.username) {
      res.locals.username = req.cookies.username
    }
    next();
  })
  app.use(noMonkey);
  function noMonkey(req, res, next) {
    const body = req.body;
    let monkeyFound = false
    for (let key in body) {
      if(`${body[key]}`.toLowerCase() === 'monkey') {
        monkeyFound = true
      }
    }
   if(monkeyFound){
       res.send('No monkeys allowed')
   } else {
       next()
   }
  }

app.get('/hello_world', (req, res)=>{
    res.send('<h5>hello cheng</h5>')
})

app.get('/welcome', (req,res) =>{
    res.cookie('hello', 'world', { maxAge: 86400000})
    res.render('welcome')
})
app.get('/contact', (req,res) =>{
    res.render('contact')
})
app.get('/thank_you', (req,res) =>{
    res.render('thank_you', {
        fullname: req.query.fullname,
        email: req.query.email,
        message: req.query.message
    })
})
app.get('/survey', (req,res)=>{
    console.log('Cookies: ', req.cookies)
    const {name,colour,day} = req.query
    res.render('survey', {
        use: name,
        a: colour,
        b: day
    })
})
app.post('/sign_in', (req, res) => {
res.cookie('username', req.body.username, { maxAge: 604800000 });
res.redirect('/welcome');
})

app.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/welcome');
});

const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

const ADDRESS = 'localhost';
const PORT = 3000;
app.listen(PORT, ADDRESS, ()=>{
    console.log(`Server listening on ${ADDRESS}:${PORT}`)
})
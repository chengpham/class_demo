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

app.get('/', (req,res)=>{
    res.render('index')
})

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

const billsRouter = require('./routes/bill')
app.use('/bills', billsRouter)

const ADDRESS = 'localhost';
const PORT = 5000;
app.listen(PORT, ADDRESS, ()=>{
    console.log(`Server listening on ${ADDRESS}:${PORT}`)
})
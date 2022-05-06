const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))


app.get('/car_status', (req,res)=>{
    res.render('car_status', {
        year: req.query.year
    })
})
app.get('/random_person', (req,res)=>{
    res.render('random_person', {
        names: null
    })
})
app.post('/random_person', (req,res)=>{
    let name = req.body.names.split(',')
    let winner = name[Math.floor(Math.random()*name.length)]
    res.render('random_person', {
        names: winner
    })
})
app.get('/directory_lister', (req, res) => {
    fs.readdir('.', (err,files)=>{
        if(err){
            res.send('An error occured')
        }
        res.render('directory_lister', { files})
    })
  })



const ADDRESS = 'localhost';
const PORT = 3000;
app.listen(PORT, ADDRESS, ()=>{
    console.log(`Server listening on ${ADDRESS}:${PORT}`)
})
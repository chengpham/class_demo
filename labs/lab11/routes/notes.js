const express = require('express')
const knex = require('../db/client')
const router = express.Router()

router.get('/', (req,res)=>{
    knex('notes')
        .orderBy('created_at', 'desc')
        .then(notes=>{
            res.render('notes/index', { notes: notes })
        })
})
router.get('/new', (req, res) => {
    res.render('notes/new', {notes:false});
});
router.get('/:id', (req, res) => {
    knex('notes')
    .where('id', req.params.id)
    .first()
    .then(notes => {
        if (!notes){
            res.send('No Post Found')
        } else{
            res.render('notes/show', { notes:notes });
        }
    });
});
router.post('/', (req, res) => {
    knex('notes')
        .insert({
        id: req.body.id,
        content: req.body.content
        })
        .returning('*')
        .then(notes => {
        res.redirect(`/notes`);
    })
})
router.get('/:id/edit', (req, res) => {
    knex('notes')
      .where('id', req.params.id)
      .first()
      .then(notes => {
        res.render('notes/edit', { notes: notes });
      })
  })
router.patch('/:id', (req,res)=>{
    knex('notes')
    .where('id', req.params.id)
    .update({
        id: req.body.id,
        content: req.body.content
    })
    .then(()=>{
        res.redirect(`/notes/${req.params.id}`)
    })
})

router.delete('/:id', (req, res) => {
    knex('notes')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.redirect('/notes');
      });
  });
module.exports = router;
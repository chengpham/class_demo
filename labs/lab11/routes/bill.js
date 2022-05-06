const express = require('express')
const knex = require('../db/client')
const router = express.Router()

router.get('/', (req,res)=>{
    knex('bill')
        .then(bills=>{
            res.render('bills/index', { bill: bills })
        })
})
router.get('/new', (req, res) => {
    res.render('bills/new', {bill:false});
});
router.get('/:id', (req, res) => {
    knex('bill')
    .where('id', req.params.id)
    .first()
    .then(bills => {
        if (!bills){
            res.send('No Post Found')
        } else{
            res.render('bills/show', { bill: bills });
        }
    });
});
router.post('/', (req, res) => {
    knex('bill')
        .insert({
        id: req.body.id,
        bill_total: req.body.total,
        tax_percent: req.body.tax,
        tip_percent: req.body.tip,
        group_size: req.body.size
        })
        .returning('*')
        .then(bill => {
        res.redirect(`/bills`);
    })
})
router.get('/:id/edit', (req, res) => {
    knex('bill')
      .where('id', req.params.id)
      .first()
      .then(bills => {
        res.render('bills/edit', { bills: bills });
      })
  })
router.patch('/:id', (req,res)=>{
    knex('bill')
    .where('id', req.params.id)
    .update({
        id: req.body.id,
        bill_total: req.body.total,
        tax_percent: req.body.tax,
        tip_percent: req.body.tip,
        group_size: req.body.size
    })
    .then(()=>{
        res.redirect(`/bills/${req.params.id}`)
    })
})

router.delete('/:id', (req, res) => {
    knex('bill')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.redirect('/bills');
      });
  });
module.exports = router;
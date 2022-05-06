const knex = require('./client')

knex('posts')
    .where('id', 900)
    .update({
        title: 'apples'
    })
    .then(n=>{
        console.log('updated n rows', n)
    })
    .catch(err=>{
        console.log(err)
    })
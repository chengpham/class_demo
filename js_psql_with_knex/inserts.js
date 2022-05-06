const knex = require('./client')

knex('posts').insert({
    title: 'our first post',
    content: 'inserting records using knexjs',
    image_url: 'http://google.ca'
}).then(n=>{ 
    console.log('inserted into posts', n)
    knex.destroy()
}).catch(err=>{ console.log(err)})


// call .toString() on any Knex query to see the SQL code
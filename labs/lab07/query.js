// Find all countries whose names begin with "b" ignoring case.
// Count how many countries have "central" in their name.
// Find all countries whose names begin with the same three letters as their code ignoring case.

const knex = require('./client')

const query1 = knex('countries').select('id', 'name', 'code').where('name', 'ilike', 'b%')
const query2 = knex('countries').select('id', 'name', 'code').where('name', 'ilike', '%central%')
const query3 = knex('countries').select('id','name','code').whereRaw(`"name" ilike "code" || '%'`)


query1.then((countries)=>console.log(countries))
query2.then((countries)=>console.log(countries))
query3.then((countries)=>console.log(countries))
.then(n=>{ 
    console.log('query countries', n)
    knex.destroy()
})
.catch(err=>{ console.log(err)})

  
const knex = require('../client')
const allCountries = require('../allCountries.js')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      const countries = allCountries.reduce( (acc, val) => {
          const lastEntry = acc[acc.length - 1]
          const newVal = {
            name: val.countryName,
            code: val.countryCode,
          }
          if (
            lastEntry &&
            lastEntry.code === val.countryCode &&
            lastEntry.name === val.countryName
          ) {
            return acc
          } else {
            return acc.concat([newVal])
          }
        },
        []
      )
      return knex('countries').insert(countries)
    })
    .then(n=>{
      console.log(n)
    })
    .catch(err=>{
      console.log(err)
    })
};



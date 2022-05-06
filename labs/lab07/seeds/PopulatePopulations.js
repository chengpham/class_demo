const knex = require('../client')
const allCountries = require('../allCountries.js')

exports.seed = function (knex) {
    return knex('populations').del()
      .then(() => {
        return knex('countries').select('id', 'code')
      })
      .then((countries) => {
        const tableData = allCountries.map((item) => {
          const country = countries.find( country => 
            country.code === item.countryCode
          )
          return {
            year: item.year,
            quantity: parseInt(item.value),
            country_id: country.id,
          }
        })
        return knex('populations').insert(tableData)
      })
  }
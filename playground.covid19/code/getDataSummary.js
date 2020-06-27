var console = require('console')
var http = require('http')
var dates = require("dates")

module.exports.function = function getDataSummary () {

  var options = {
    headers: {
      'Accept': 'application/json'
    },
    format: "json",
    cacheTime: 0
  }
  var api = "https://api.covid19api.com/summary"
  var response = http.getUrl(api, options)
  console.log(response)

  const newConfirmed = response["Global"]["NewConfirmed"]
  const totalConfirmed = response["Global"]["TotalConfirmed"]
  const newDeaths = response["Global"]["NewDeaths"]
  const totalDeaths = response["Global"]["TotalDeaths"]
  const newRecovered = response["Global"]["NewRecovered"]
  const totalRecovered = response["Global"]["TotalRecovered"]



  var res = { obj: [] }
  res.obj.push({
    newConfirmed: newConfirmed,
    totalConfirmed: totalConfirmed,
    newDeaths: newDeaths,
    totalDeaths: totalDeaths,
    newRecovered: newRecovered,
    totalRecovered: totalRecovered
  })

  return res.obj
}

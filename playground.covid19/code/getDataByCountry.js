var console = require('console')
var http = require('http')
var dates = require("dates")

module.exports.function = function getDataByCountry (countryCode) {

  var options = {
    headers: {
      'Accept': 'application/json'
    },
    format: "json",
    cacheTime: 0
  }
  var api = "https://api.covid19api.com/summary"
  var response = http.getUrl(api, options)
  //console.log(response["Countries"])
  console.log(countryCode)

  for(var i = 0; i < response["Countries"].length; i++) {
    if (response["Countries"][i]["CountryCode"] == countryCode) {
        console.log(response["Countries"][i])
        const newConfirmed = response["Countries"][i]["NewConfirmed"]
        const totalConfirmed =  response["Countries"][i]["TotalConfirmed"]
        const newDeaths =  response["Countries"][i]["NewDeaths"]
        const totalDeaths =response["Countries"][i]["TotalDeaths"]
        const newRecovered = response["Countries"][i]["NewRecovered"]
        const totalRecovered = response["Countries"][i]["TotalRecovered"]
        const country = response["Countries"][i]["CountryCode"]
        const countryName = response["Countries"][i]["Country"]
        const dataTime = response["Countries"][i]["Date"] 
    }
  }

  var res = { obj: [] }
  res.obj.push({
    newConfirmed: newConfirmed,
    totalConfirmed: totalConfirmed,
    newDeaths: newDeaths,
    totalDeaths: totalDeaths,
    newRecovered: newRecovered,
    totalRecovered: totalRecovered,
    countryCode: country,
    country: countryName,
    dataTime: dataTime
  })

  console.log(res.obj)

  return res.obj
}

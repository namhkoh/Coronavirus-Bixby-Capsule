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

  const ret = response["Countries"].filter(function(item){
    if (item["CountryCode"] == countryCode){
      return item
    }
  })

  var res = { obj: [] }
  res.obj.push({
    newConfirmed: ret[0]["NewConfirmed"],
    totalConfirmed: ret[0]["TotalConfirmed"],
    newDeaths: ret[0]["NewDeaths"],
    totalDeaths: ret[0]["TotalDeaths"],
    newRecovered: ret[0]["NewRecovered"],
    totalRecovered: ret[0]["TotalRecovered"],
    countryCode: ret[0]["CountryCode"],
    country: ret[0]["Country"],
    dataTime: ret[0]["Date"]
  })

  console.log(res.obj)

  return res.obj
}

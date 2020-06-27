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

  return 'testing'
}

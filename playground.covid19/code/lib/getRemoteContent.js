/**
 * https://www.youtube.com/watch?v=_U_xiA8r0mg&feature=emb_logo tutorial for help 
 * https://github.com/bixbydevelopers/capsule-sample-fact code used for youtube embedding
 */
exports.getDadJoke = getDadJoke

var http = require('http')

function getDadJoke() {
  // Simple example of calling an API for a fact/joke
  // This is a free and open web service - please do not abuse it. See https://icanhazdadjoke.com/ for more information
  // Note Bixby HTTP API is asynchronous - no need for a promise or callback
  var response = http.getUrl('https://icanhazdadjoke.com/', {
    format: 'json',
    headers: {
      accept: 'application/json'
    }
  });
  
  return response.joke;
}
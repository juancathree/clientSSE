const EventSource = require("eventsource")

if(typeof(EventSource) !== "undefined") {
    console.log("soported")
  } else {
    console.log("no soported")
  }

var eventSource = new EventSource("http://localhost:3000/api/travels/polling/606c825886e1b613c7a86994")

eventSource.onmessage = function(e) {
  console.log(e)
}
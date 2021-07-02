const EventSource = require("eventsource")

if(typeof(EventSource) !== "undefined") {
    console.log("soported")
  } else {
    console.log("no soported")
  }

var eventSource = new EventSource("http://localhost:3000/api/travels/polling/609147fc407393a0ea707aea")

eventSource.onmessage = function(e) {
  console.log(e.data)
  console.log("")
}
const { EventEmitter } = require("events")

const emitter = new EventEmitter()

emitter.on("evento", function(param) {
	
	console.log(param)
	
})

emitter.on("soma", function(a, b) {
	
	console.log(a+b)
	
})

emitter.emit("evento", "algum param")
emitter.emit("soma", 1,2)

function wait(delay) {
	return new Promise(resolve => setTimeout(resolve, delay))
}
/*
wait(0)
.then(function() {
	console.log("mostra algo")
	return 3000
})
.then(() => wait(3000))
.then(function() {
	console.log("mostra depois")
})
*/

let master = new Promise(function(resolve) {setTimeout(resolve, 3000)})
async function run() {
	await wait(0)
	console.log("mostra algo")
	await wait(3000)
	console.log("mostra depois")
}

function next(thenable) {
	master = master.then(thenable)
}

function a () {
	next(function(){console.log("encadeei trabalho a")})
}

function b () {
	next(function(){console.log("encadeei trabalho b")})
}

b()
a()
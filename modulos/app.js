// app.js
const {cube, foo, graph } = require('./my-module.js')

graph.options = {
    color:'blue',
    thickness:'3px'
};
const v = cube(4)
console.log(v)

graph.draw();

console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
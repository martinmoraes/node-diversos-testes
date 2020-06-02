// module "my-module.js"
  
  exports.cube = function cube(x) {
    return x * x * x;
  }
  
  exports.foo = Math.PI + Math.SQRT2;
  
  exports.graph = {
    options: {
        color:'white',
        thickness:'2px'
    },
    draw: function() {
        console.log('From graph draw function');
    }
  }
  
  // module.exports = {cube, foo, graph }
// module "my-module.js"
  export class geral{
    cube(x) {
      return x * x * x;
    }
    
    foo = Math.PI + Math.SQRT2;
    
    graph = {
      options: {
          color:'white',
          thickness:'2px'
      },
      draw: function() {
          console.log('From graph draw function');
      }
    }
}
  // module.exports = {cube, foo, graph };
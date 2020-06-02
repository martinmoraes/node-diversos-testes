//car.js
class Car {

  constructor(brand) {
    this._carname = brand;
  }

  get carname() {
    return this._carname;
  }
  
  set carname(x) {0000000000
    this._carname = x;
  }
}

module.exports = { Car }

// mycar = new Car("Ford");
// mycar.carname = "Volvo";
// console.log(mycar.carname)
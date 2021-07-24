//someones garage
this.car = "Honda"

var myGarage = {
    car: "bentley",
    getCar: function() {
        return this.car;
    }
}

console.log(myGarage.getCar());

// this point and higher, it works and i should be getting my bentley
// but what happens when i store it into a variable

var storeCar = myGarage.getCar;
console.log(storeCar())


var realStoreCar = myGarage.getCar.bind(myGarage);
console.log(realStoreCar())

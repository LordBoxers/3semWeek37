//Opgave 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Henrik", "Steve"];

let shortNames = names.filter(n => n.length <=3)

names.forEach(n => console.log(n))
shortNames.forEach(n => console.log(n))

//Opgave 2
let upperNames = names.map(n => n.toUpperCase())

//Opgave 3
var toHtml = function(a) {    
    return "<ul>" + a.map(n => "<li>" + n + "</li>").join("") + "</ul>"
}

console.log(toHtml(names))

//Opgave 4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let newerCars = cars.filter(n => n.year > 1999)
let volvos = cars.filter(n => n.make === 'Volvo')
let cheapCars = cars.filter(n => n.price < 5000)
console.log(newerCars)
console.log(volvos)
console.log(cheapCars)


//Opgave 4a
var getValues = function(a){
    let s = ""
    for(prop in a){
        s += (prop, a[prop]) + ", "
    }
    return s.slice(a.length, -2)
}

var carsToSQL = function(a){
    return a.map(n => ("INSERT INTO cars (id,year,make,model,price) Values ( "
    + getValues(n)) + " );").join("\n")
    
}



console.log(carsToSQL(cars))



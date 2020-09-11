//Opgave 1
var person = {name: "Steve", birthday: "11-03-1994", hobby: "none", email: "Steve@McGee.com"};

for (prop in person) {
    console.log(prop, person[prop])
}

delete person.name

for (prop in person) {
    console.log(prop, person[prop])
}

person.name = "NotSteven"

for (prop in person) {
    console.log(prop, person[prop])
}

//Opgave 2
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getInfo = function () {
        return "Name: " + firstName + " " + lastName + "\n" + "age: " + age;
    }
}

var p = new Person("LookAtme", "IHaveMyInfoShownThroughConstructorMethod", 12)
console.log(p.getInfo())
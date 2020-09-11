//Opgave 1
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        },
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();

console.log(counter1.value())
counter2.decrement()
console.log(counter2.value())

//lert(counter1.value()); /* Alerts 2*/

//Opgave 2
var person = function () {
    var age = 0;
    var name = "";
    function changeAge(newAge) {
        age = newAge;
    }
    function changeName(newName) {
        name = newName;
    }
    function info() {
        return name + ", " + age;
    }

    return {
        getInfo: function () {
            return info();
        },
        setAge: function (newAge) {
            changeAge(newAge);
        },
        setName: function(newName){
            changeName(newName);
        }

    }
}

var p = person();
p.setName("Hans")
p.setAge(25)
console.log(p.getInfo())


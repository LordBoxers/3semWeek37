//Opgave 1 + 3
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    if (!(typeof n1 === "number" || typeof n2 === "number" || typeof callback === "function")) {
        throw new Error("wrong type")
    }

    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

//Opgave 2 + 3
console.log(add(1, 2));    //Print 3, by using function add
console.log(add);    //will print the function name, add represents the function add
console.log(add(1, 2, 3)); //Prints 3, since other parameters are not added or returned.
console.log(add(1));	  //Prints NaN (Not a Number) because no number was given as param
console.log(cb(3, 3, add)); //Prints "Result from the two numbers: 3+3=6" using add as the callback function
console.log(cb(4, 3, sub)); //Prints "Result...=1", since sub is used as callback function
try {
    console.log(cb(3, 3, add())); // () is added to callback function, creates an error (callback is not a function).
} catch (e) {
    console.error("Wrong type was given --> " + e.toString())
}

console.log(cb(3, "hh", add));//Prints "Result..=3hh" because it converts into type String, since hh is not a number.


//Opgave 4
var mul = function (n1, n2){
    return n1 * n2
}

console.log(cb(3, 3, mul))

//Opgave 5
console.log(cb(10, 5, (n1, n2) => n1 / n2))
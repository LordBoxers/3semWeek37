//Opgave 1
function Person(name){
  this.name = name; //this.name defaults to global
  //var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+ this.name/*self.name*/);  //The "this" belongs to the anonomoys function, not the Person function.
  }.bind(this),2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //gets the default value of name, set in Person function

//We use the function to instantiate object, how? -by typing it (line 10)
//functions starting with a capitalized letters, are javascript constructors.

//Opgave 3
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: "+ name);  //What’s different ? - nothing really

//Opgave 4
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);






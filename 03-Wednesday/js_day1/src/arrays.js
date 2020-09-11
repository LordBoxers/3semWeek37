//Opgave a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//Opgave b
let all = boys.concat(girls);
console.log(all)

//Opgave c
console.log(all.join(", ") + "\n" + all.join("-"))

//Opgave d
all.push("Lone", "Gitte")

// let all = [...girls, "Lone", "Gitte"] <-- nyere måde at gøre på

console.log(all)

//Opgave e
all.unshift("Hans", "Kurt")
console.log(all)

//Opgave f
all.shift("Hans")
console.log(all)

//Opgave g
all.pop("Gitte")
console.log(all)

//Opgave h
all.splice(3, 2)
console.log(all)

//Opgave i
all.reverse()
console.log(all)

//Opgave j
all.sort()
console.log(all)

//Opgave k
all.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(all)

//Opgave l
console.log(all.map(n => n.toUpperCase()))

//Opgave m
let filtered = all.filter(n => n.charAt(0).toLowerCase() === "l")
console.log(filtered)




for (let i = 0; i <= 10; i+= 1) {
    console.log(i);
}
// This is a for loop. The variable is initially set to 0, and each time the loop runs, it increments by 1.
// The loop will continue to execute the code below until the variable i is equal to 10, at which point the loop will stop.

/*
var pageNames = [
    "Home",
    "About Us",
    "Contact us",
    "Playing with Javascript",
    "New",
    "Blog"
];
for (let i = 0; i < pageNames.length; i += 1) {
    var currentPage = pageNames[i];

    if (document.title === currentPage) {
        console.log("We Are here: " + currentPage);
    } else {
        console.log("We are not here: " + currentPage);
    }
}
*/
// Here we are looping through the pages in the array. Using document.title, we can see which page we're on and execute a command 
// to indicate that we are on that specific page.

var pageNames = [
    "Home",
    "About Us",
    "Contact us",
    "Playing with Javascript",
    "New",
    "Blog"
];

for (var x in pageNames) {
    console.log(pageNames[x]);
}
// A regular for loop where we go and print every value in the array

let mySet = new Set();
mySet.add(1);
mySet.add(2);
console.log(mySet);
console.log(mySet.has(1));
// What you see here is a setInterval. It is simmalair to an array but its only allowing you to 
// have values ones, so no dubble values.

let myArray = [1, 1, 2, 3, 4, 4, "chicken"];
let mySet2 = new Set(myArray);
console.log(mySet2);

for (let i of mySet2) {
    console.log('my set contains: ',i);
}
// As you can see you can make an array and change it to an set. It will remove all the dupes in the array.

var myMap = new Map();
myMap.set("white", "Black");
myMap.set("Large", "Small");
myMap.set("Short", "Tall");

console.log(myMap);

console.log(myMap.get("Short"));
console.log(myMap.has("Short"));
// This are Maps, they look like objects/dictionarys but also do not allow you to have dupes
// and are allways comming in the same order

for (let value of myMap) {
    console.log(value);
}

myObject = {
    "White": "Black",
    "Large": "Small",
    "Short": "Tall"
};

myMap2 = new Map(Object.entries(myObject));
console.log(myMap2);
// If you loop tru an map each value key pair will be a seprate array and all those arrays are in a single array
// And you can also make an map from an object/dictionart 

for (let i = 0; i < 11; i += 1) {
    console.log(i, " :I like chicken");
}

let i = 0;
while(i <= 10) {
    console.log(i, " :I love chicken");
    i += 1;
}
// Here you see a while loop, its the same as a for loop but shorter and you can use do
// do makes sure the loop loops atleast once even if the condition isnt true

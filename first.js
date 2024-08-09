var x = "hu";
x = "hi";
console.log(x);
console.log("This is medi's editor")
var string = "I'm\"Medi\" the programmer".toUpperCase()
console.log(string);
let tekst = `"Goodmorning!"`;
let tekst1 = `I say ${tekst}`
console.log(tekst1)

// Type Math. to see all the math function that javascript offers.
var wisk = Math.round(16.6884846545);
console.log(wisk);

var tel = "Iphone13", oldtel = "Iphone12";
tel = "Iphone12";
console.log(tel === oldtel);
// Do this to check somthing.

const Dozen = 12, HalfDozen = 6, BakersDozen = 13
console.log(Dozen, HalfDozen, BakersDozen);
// With const you can make a variable that isn't changeable. If you use var or let then it is changeable.

var object = {};
var object1 = {
    "meat": "$5",
    "cheese": "$3",
    "bread": "$2",
    "good": true
};

console.log(object1.cheese);
console.log(object1);
console.log(object1["good"])
// This is an object it looks like a dictionary in python.
// You can do this to get the value from a key object.key like this.

object1.cheese = "$5";
object1["drink"] = "$10";
console.log(object1["drink"]);
delete object1.meat;
console.log(object1);
// You can change, add or delete a value using this info above!

let object3 = Object.assign({}, object1);
object3["drink"] = "$5";
console.log(object3);
// If you wanna make a copy of an object.

var MyDays = [{"Monday": "Gym"}, ["A", "B", "C"],1, 2, 3, 4, true, false, "Monday", "Tuesday", "Wednesday", "Thurstday", "Friday", "Saturday", "Sunday"];
console.log(MyDays[1]);
console.log(MyDays.length);
var countries = ["USA", "UK", "Holland", "French", "Germany"];
countries[countries.length] = "Belgium";
countries.push("Sweden");
// Arrays can have multriple datatypes in instanceof, with countries.lenght and .push you can add somthing to the back of ann array

countries.splice(2, 2);
console.log(countries);
// If you wanna delete somthing from an array

var string1 = "My name is Medi, and i am currently 17 years of age!"; 
var string2 = "My name is Medi, and i like to learn new stuff";
var string3 = "Who are you? My name is Medi!";
var string4 = "What are you doing? I am programming!";

var regex = /is/;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));
// Here we are using the regex method, we are checking if the word 'is' is in our string.

var one = 1, two = 2, extra = 2;

console.log(one === extra);
console.log(one !== extra);

console.log(one == one);
console.log(one != "1");

console.log(one >= two);
// This are basic commands to check is somthing is diffrent, same, more or less than somthing else

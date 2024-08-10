var q = 2 + 5, w = 4-3, e = 8 * 3, r = 36 / 2;
console.log(q, w, e, r);
// This are just basic math commands you are also able to add two string togheter like dog + cat is catdog in 1 string

var t = 20 % 2, y = 19 % 2;
console.log(t, y);

var u = 20 % 2 === 0;
console.log(u);
// Here you can check the remainers so the .0 after a number and with the === at the end you can ask 
// if the remainers is for example you can do this with variables that are a int or float you could aslo do it with string


let animal1 = "bear", animal2 = "monkey", animal3 = "rat";
console.log(animal1 === animal1 && animal1 === animal1 && animal1 === animal1);
console.log(animal1 === "bear" || animal2 === "bear");
console.log((animal1 === "bear" || animal1 === "bear") && animal2 === "monkey");
// The && means and, so is A true and is B true if one of the two isn't true it will return false 
// The || means or so, is A with B true or A with C it doesn't matter if there is atleast one true or equel to your commands and output
// If u want a bigger line with or, and then you can choose wich one you want first by using () around them

/* var awnser = window.confirm("Click OK, get true. Click Cancel, get false"); 
if (awnser === true) {
    console.log("You said true!");
} else {
    console.log("You said somthing else!");
} */
// Here you are asking the user to click Ok or Cancel. And based on that you can work further. You can only use this in the web not in node!

/* var question = window.prompt("Type YES, NO or MAYBE. Then click ok!"); 
if (question === "YES" || question === "yes") {
    console.log("You said YES!");
} else if (question === "NO") {
    console.log("You said NO");
} else {
    console.log("You rebel, you!");
} */
// Here you are asking the user for a input and based on the input you can work further. You can only use this in the web not in node!

/* switch (question) {
    case "YES":
        console.log("You said YES!");
        break;
    case "NO":
        console.log("You said NO!");
        break;
    case "MAYBE":
        console.log("You said maybe");
        break;
    default:
        console.log("You rebel, you!");
        break;
} */
// Here its the same idea as if, else. switch(variable name) and case is if "THIS IS THE INPUT" and then what you want you want. Default is
// if the user typte anything else then what you have asked

var cherub = "Cupid";
if (cherub == "Cupid") console.log("Ouch, an arrow!");
if (cherub == "Cupid") console.log("Ouch, an arrow!"); 
    else console.log("I didn't feel anything!");
// here you can use if statements in one line but it isn't very common

let errorMsg = "hi";
if (!errorMsg) {
    console.log("There was an error the var is empty");
} else if (errorMsg) {
    console.log("Yay, no errors!");
}

let errorArray = []
if (errorArray.length) {
    console.log("Its empty");
} else {
    console.log("Yay, its not empty");
}
// Here you are error finding to see if you have data in your variables etc.

let animal = 'cat';
animal === 'cat'
    ? console.log("cat")
    : console.log('dog');

var kind = animal === 'cat' ? console.log("its a cat") : console.log("Its not a cat");
// ? means if the === is true and : means if the === is wrong

let thing = "21";
console.log(typeof thing);
thing = 21;
console.log(typeof thing);
// This is how you can see if a variable is either a string or number/float

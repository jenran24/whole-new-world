'use strict';

console.log("I am in the HTML");
alert("Welcome! I hope you love Scout!");

function getUsername() {
    const usersName = prompt("Would you rather have a dog or a cat?");
    return usersName;
}

getUsername();

console.log(getUsername());

document.write(usersName + " is a great choice!");

if (usersName == "dog") {
    alert("Me too! I love everything about dogs!")
} else if (usersName == "cat"){
    alert("Cats are pretty cool, too! Taylor Swift has three of them!")
} else {
    alert("Oh, ok. I hope you at least have an animal you love!")
}

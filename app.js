'use strict';

console.log("I am in the HTML");
alert("Welcome! I hope you love dogs!");

const usersName = prompt("Would you rather have a dog or a cat?");
console.log(usersName); 

document.write("Howdy! I am so happy you're here! I also love " + usersName);

if (usersName == "dog" or "dogs" or "Dog" or "Dogs") {
    alert("Me too! I love everything about dogs!")
} else if (usersName == "cat" or "cats" or "Cat" or "Cats"){
    alert("Cats are pretty cool, too! Taylor Swift has three of them!")
} else {
    alert("Oh, ok. I hope you at least have an animal you love!")
}
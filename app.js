'use strict';

console.log("I am in the HTML");
alert("Welcome! I hope you love Scout!");

function getUsername(); {
    const usersName = prompt("Would you rather have a dog or a cat?");

    console.log(usersName)

    return usersName;
}

getUsername();

console.log(getUsername());

function greetUser(){
    if (usersName == "dog") {
    alert("Me too! I love everything about dogs!")
} else if (usersName == "cat"){
    alert("Cats are pretty cool, too! Taylor Swift has three of them!")
} else {
    alert("Oh, ok. I hope you at least have an animal you love!")
}

}

function rateMyPage(){
    let rating = prompt("How many stars would you rate my page? 1-5");

    console.log(rating)

    for (let i = 0; i < rating; i++){
        document.write('<img class="loop-img" src="scoutandsnow.jpg" alt="german shepherd sitting in the snow regally" />')
    }
}

document

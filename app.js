'use strict';

console.log("I am in the HTML");
alert("Welcome! I hope you love Scout!");

function getUsersname(){
    let usersName = prompt("Would you rather have a dog or a cat?");
    console.log(usersName);
}

function greetUser(){
    let usersName = prompt("Would you rather have a dog or a cat?");
    while(usersName == ""){
        usersName = prompt("Oh no, I need an answer!! I need to know if you would rather have a cat or a dog?");
    }

    if (usersName == "dog") {
    document.write("Me too! I love everything about dogs!");
} else if (usersName == "cat"){
    document.write("Cats are pretty cool, too! Taylor Swift has three of them!");
} else {
    document.write("Oh, ok. I hope you at least have an animal you love!");
    }

}

function rateMyPage(){
    let rating = prompt("How many stars would you rate my page? 1-5");

    console.log(rating);

    for (let i = 0; i < rating; i++){
        document.write('<img class="loop-img" src="scoutandsnow.jpg" alt="german shepherd sitting in the snow regally" />');
    }
}

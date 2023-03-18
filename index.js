//what to do when click detected.
/*document.querySelector("button",[0]).addEventListener("click", handleClick);

function handleClick() {
    alert("I got click");
}*/

//using loop
//eiter of one it is the same

//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) { //this is a loop from 0-7

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
       var buttonInnerHTML = this.innerHTML; 

       makeSound(buttonInnerHTML);

       buttoAnimation(buttonInnerHTML);
         
    });   
    
}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttoAnimation(event.key);
    
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

function buttoAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);    

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}



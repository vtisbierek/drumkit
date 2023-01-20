document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonFlash(event.key);
});

//é possível fazer a lógica por meio do evento keyup
/* document.addEventListener("keyup", function(event){
    buttonFlash(event.key);
}); */

for(var btnCount = 0; btnCount < document.querySelectorAll(".drum").length; btnCount++){
    document.querySelectorAll(".drum")[btnCount].addEventListener("mousedown", function(){
        makeSound(this.innerHTML);
        buttonFlash(this.innerHTML);
    });
}

//é possível fazer a lógica por meio do evento mouseup
/* for(var btnCount = 0; btnCount < document.querySelectorAll(".drum").length; btnCount++){
    document.querySelectorAll(".drum")[btnCount].addEventListener("mouseup", function(){
        makeSound(this.innerHTML);
        buttonFlash(this.innerHTML);
    });
} */

function makeSound(trigger) { 
    switch(trigger){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

//se a lógica for feita com os eventos keyup e mouseup, não é necessário setar timer
/* function buttonFlash(trigger){
    document.querySelector("." + trigger).classList.toggle("pressed");
} */

function buttonFlash(trigger){
    document.querySelector("." + trigger).classList.toggle("pressed");
    setTimeout(function(){
        document.querySelector("." + trigger).classList.toggle("pressed");    
    }, 100);
}
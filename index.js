
var n = document.querySelectorAll(".drum").length;
var i = 0;
while(i <n){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var button1 = this.innerHTML;
      makeSound(button1)
      anim1(button1)
      
  });
  i++;
} 

document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    anim1(event.key)
});


function makeSound(key) {
  
  switch (key) {
    case "w":
      var audio0 = new Audio('sounds/tom-1.mp3');
      audio0.play();    
      break;
  
    case "a":
      var audio1 = new Audio('sounds/tom-2.mp3');
      audio1.play();    
      break;
    
    case "s":
      var audio2 = new Audio('sounds/tom-3.mp3');
      audio2.play();    
      break;
  
    case "d":
      var audio3 = new Audio('sounds/tom-4.mp3');
      audio3.play();    
      break;
  
    case "j":
      
      var audio4 = new Audio('sounds/snare.mp3');
      audio4.play();    
      break;
  
    case "k":
      var audio5 = new Audio('sounds/crash.mp3');
      audio5.play();    
      break;
  
    case "l":
      var audio6 = new Audio('sounds/kick-bass.mp3');
      audio6.play();    
      break;
  
          
    default:
      console.log(key);
      
      break;
  }
    
}

function anim1(acKey) {

    var clicked = document.querySelector("."+acKey  );

    clicked.classList.add("pressed");

    setTimeout(function () {
        clicked.classList.remove("pressed");
    } , 100 )
}








// Playing sound for clicks
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    checkKeyAndPlay(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// Playing sound for keypresses
document.addEventListener("keydown", function(event){
  checkKeyAndPlay(event.key);
  buttonAnimation(event.key);
});
//function for appropriare sound
function checkKeyAndPlay(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
  }
}
// Function for button animation
function buttonAnimation(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){ document.querySelector("." + key).classList.remove("pressed"); }, 80);
}

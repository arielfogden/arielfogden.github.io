var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
  console.log('toggle')
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)



// STREAMING BAR //

// var play = $("#jazz-song")[0];
// $("#play-pause").click(function() {
//     audio.play();
// });



//var audio = $("#mySoundClip")[0];
//$("nav a").mouseenter(function() {
  //audio.play();
//});


var music = $("#jazz-song")[0];
    
$("#music-button").click(function() {
    if ($('audio#jazz-song')[0].paused == false ){
    music.pause();
    } else {
    music.play();
    }
});


$("#music-button").on("click", function() {
  var el = $(this);
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
});
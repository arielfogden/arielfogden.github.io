


var music = $("#elevator")[0];
    
$("#music-button").click(function() {
    if ($('audio#elevator')[0].paused == false ){
    music.pause();
    } else {
    music.play();
    }
});
var baseVol = 1; // musicのベースの音量
var fadeSpeed = 1500;

const music = document.querySelector("#music");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");

play.addEventListener("click", ()=> {
    music.play();
    music.volume = 0;
    var start_func = setInterval(function() {
        music.volume = music.volume + (baseVol / 500);
        if(music.volume >= baseVol - (baseVol / 500)) {
            music.volume = baseVol;
            clearInterval(start_func);
        }
    }, fadeSpeed * baseVol / 100);
}, false);

pause.addEventListener("click", ()=> {
    var end_func = setInterval(function() {
        music.volume = music.volume - (baseVol / 100);
        if(music.volume <= (baseVol / 100)) {
            music.volume = baseVol;
            music.pause();
            clearInterval(end_func);
        }
    }, fadeSpeed * baseVol / 100);
}, false);
let play = document.getElementById("my-video");
let button = document.querySelector(".saying_section .video")

function playVid() {
    play.play();
}

function pauseVid() {
    play.pause();
}



button.addEventListener("click", playVid);


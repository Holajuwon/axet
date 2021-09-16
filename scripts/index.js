// Get the video
let video = document.getElementById("video-section");
// Get the button
let btn = document.getElementById("play-btn");
// Pause and play the video, and change the button text
function toggleVideo() {
  if (video.paused) {
    video.play();
    // btn.innerHTML = "Pause";
  } else {
    video.pause();
    // btn.innerHTML = "Play";
  }
}

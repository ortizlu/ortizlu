// alert('welcome!');
//update current year for copyright purposes
const year = new Date().getFullYear().toString();
const yearSpan = document.querySelector('.year');
yearSpan.innerText = year;

const screenshots = document.querySelectorAll('img.screenshot');
screenshots.forEach(screenshot => {

  //get the video that comes after the screenshot
  const video = screenshot.parentNode.childNodes[3]

  const playVideo = function () {
    video.dataset.playing = true
    video.play()
  }

  const pauseVideo = function () {
    video.dataset.playing = false
    video.pause()
    video.currentTime = 0;
  }

  screenshot.addEventListener('mouseover', playVideo)
  screenshot.addEventListener('mouseout', pauseVideo)
})
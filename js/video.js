//Page Load
var video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay=false;
	console.log("Auto play is set to false");
	video.loop=false;
	console.log("Loop is set to false");
});

//Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + '%';
});

//Pause Button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow down video");
	video.defaultPlaybackRate = 1;
    video.playbackRate *= 0.9;
    console.log("Speed is " + video.playbackRate);
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed up Video");
	video.defaultPlaybackRate = 1;
    video.playbackRate /= 0.9;
    console.log("Speed is " + video.playbackRate);
});
//Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} 
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
  });
  
//Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false) {
		video.muted = true;
		document.getElementById('mute').innerHTML = 'Unmute';
		console.log("Mute");
	} 
	else {
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
		console.log("Unmute");
	}
  });
 
//Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	var volumeInfo = document.getElementById("volume");
	video.volume = document.querySelector("#slider").value / 100;
	volumeInfo.innerHTML = document.querySelector("#slider").value + '%';
	console.log("The current value is " + video.volume)
	console.log(volumeInfo);
});

//Styled
document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add("oldSchool")
});

//Original 
document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

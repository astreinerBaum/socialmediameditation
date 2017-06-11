var audio, playbtn;
function initAudioPlayer(){
  audio = document.getElementById('guidedMeditation');

  // Set object references
	playbtn = document.getElementById("playpausebtn");
  // Add Event Handling
	playbtn.addEventListener("click",playPause);

  // Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(img/Pause.png) no-repeat";
        playbtn.style.backgroundSize = "contain";
      } else {
		    audio.pause();
		    playbtn.style.background = "url(img/Play.png) no-repeat";
        playbtn.style.backgroundSize = "contain";
	    }
	}
}

window.addEventListener("load", initAudioPlayer);

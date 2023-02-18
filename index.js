window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
  key.addEventListener("click", soundClicked);
  key.addEventListener("transitionend", removePlayingTransition);
});

function playSound(e) {
  play(e);
}

function soundClicked(e) {
  play(e);
}

function play(e) {
  //  We look for keyCode in a keydown event if it is a nullish
  //  value then we look for it in the dataset of the target of a click event
  const keyCode = e.keyCode ?? e.target.dataset.keyCode;
  const audio = document.querySelector(`audio[data-key-code="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key-code="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removePlayingTransition() {
  this.classList.remove("playing");
}

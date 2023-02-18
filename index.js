window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key-code="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key-code="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => {
    key.addEventListener("transitionend", removePlayingTransition);
  });
}

function removePlayingTransition(e) {
  if (e.propertyName === "scale") this.classList.remove("playing");
}

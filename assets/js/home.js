let audioToggler = document.getElementById('audio-toggler');
muteAudio = true;

function toggleAudio() {
    if(muteAudio) {
      audioToggler.classList.remove('fa-volume-mute');
      audioToggler.classList.add('fa-volume-up');
      muteAudio = false;
      localStorage.setItem('muteAudio', false);
    } else {
      audioToggler.classList.remove('fa-volume-up');
      audioToggler.classList.add('fa-volume-mute');
      muteAudio = true;
      localStorage.setItem('muteAudio', true);
    }
}

audioToggler.addEventListener('click', toggleAudio);
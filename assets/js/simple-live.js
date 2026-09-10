(function () {
  'use strict';

  var startButton = document.getElementById('start-room');
  var joinForm = document.getElementById('join-form');
  var roomView = document.getElementById('room-view');
  var roomTitle = document.getElementById('room-title');
  var roomCodeInput = document.getElementById('room-code');
  var guestNameInput = document.getElementById('guest-name');
  var joinMessage = document.getElementById('join-message');
  var localVideo = document.getElementById('local-video');
  var videoPlaceholder = document.getElementById('video-placeholder');
  var userInitial = document.getElementById('user-initial');
  var localLabel = document.getElementById('local-label');
  var copyButton = document.getElementById('copy-room');
  var micButton = document.getElementById('toggle-mic');
  var cameraButton = document.getElementById('toggle-camera');
  var leaveButton = document.getElementById('leave-room');
  var activeRoomCode = '';
  var mediaStream = null;
  var micEnabled = true;
  var cameraEnabled = false;

  function makeRoomCode() {
    return Math.random().toString(36).slice(2, 8).toUpperCase();
  }

  function showRoom(code, name) {
    activeRoomCode = code;
    roomTitle.textContent = 'Room ' + code;
    localLabel.textContent = name || 'You';
    userInitial.textContent = (name || 'You').charAt(0).toUpperCase();
    roomView.hidden = false;
    roomView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function setMessage(message) {
    joinMessage.textContent = message;
  }

  startButton.addEventListener('click', function () {
    showRoom(makeRoomCode(), 'Host');
  });

  joinForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var code = roomCodeInput.value.trim().toUpperCase();
    var name = guestNameInput.value.trim();
    if (code.length !== 6) {
      setMessage('Enter the six-character room code.');
      roomCodeInput.focus();
      return;
    }
    if (!name) {
      setMessage('Add your name so the host knows who is waiting.');
      guestNameInput.focus();
      return;
    }
    setMessage('Request sent. Opening the local guest preview.');
    showRoom(code, name);
  });

  copyButton.addEventListener('click', function () {
    if (!activeRoomCode) return;
    var copyText = function () {
      copyButton.innerHTML = 'Copied <span aria-hidden="true">✓</span>';
      window.setTimeout(function () { copyButton.innerHTML = 'Copy code <span aria-hidden="true">⧉</span>'; }, 1800);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(activeRoomCode).then(copyText);
    } else {
      copyText();
    }
  });

  micButton.addEventListener('click', function () {
    micEnabled = !micEnabled;
    if (mediaStream) mediaStream.getAudioTracks().forEach(function (track) { track.enabled = micEnabled; });
    micButton.innerHTML = '<span aria-hidden="true">◉</span> Mic ' + (micEnabled ? 'on' : 'off');
  });

  cameraButton.addEventListener('click', function () {
    if (cameraEnabled) {
      if (mediaStream) mediaStream.getVideoTracks().forEach(function (track) { track.stop(); });
      localVideo.pause();
      localVideo.srcObject = null;
      localVideo.style.display = 'none';
      videoPlaceholder.style.display = 'grid';
      cameraEnabled = false;
      cameraButton.innerHTML = '<span aria-hidden="true">□</span> Camera';
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      cameraButton.textContent = 'Camera unavailable';
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
      mediaStream = stream;
      localVideo.srcObject = stream;
      localVideo.style.display = 'block';
      videoPlaceholder.style.display = 'none';
      cameraEnabled = true;
      cameraButton.innerHTML = '<span aria-hidden="true">■</span> Camera on';
    }).catch(function () {
      cameraButton.textContent = 'Camera blocked';
    });
  });

  leaveButton.addEventListener('click', function () {
    if (mediaStream) mediaStream.getTracks().forEach(function (track) { track.stop(); });
    mediaStream = null;
    cameraEnabled = false;
    roomView.hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

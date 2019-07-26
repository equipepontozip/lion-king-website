'use strict';

document.addEventListener('DOMContentLoaded', () => {

function hasGetUserMedia() {
  console.log('checking user')
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  console.log('got user!')
  // Good to go!
} else {
  alert('getUserMedia() is not supported by your browser');
}

//-------------------------

const hdConstraints = {
  video: {width: {min: 1280}, height: {min: 720}}
};

navigator.mediaDevices.getUserMedia(hdConstraints).
  then((stream) => {video.srcObject = stream});

const vgaConstraints = {
  video: {width: {exact: 640}, height: {exact: 480}}
};

navigator.mediaDevices.getUserMedia(vgaConstraints).
  then((stream) => {video.srcObject = stream});

// //----------------------

const videoElement = document.querySelector('video');
const audioSelect = document.querySelector('select#audioSource');
const videoSelect = document.querySelector('select#videoSource');

console.log(videoElement)
console.log(audioSelect)
console.log(videoSelect)

// navigator.mediaDevices.enumerateDevices()
//   .then(gotDevices).then(getStream).catch(handleError);

// audioSelect.onchange = getStream;
// videoSelect.onchange = getStream;

// const constraints = {
//   audio: {
//     deviceId: {exact: audioSelect.value}
//   },
//   video: {
//     deviceId: {exact: videoSelect.value}
//   }
// };

// function gotDevices(deviceInfos) {
//   console.log('inside gotDevices')
//   for (let i = 0; i !== deviceInfos.length; ++i) {
//     const deviceInfo = deviceInfos[i];
//     const option = document.createElement('option');
//     option.value = deviceInfo.deviceId;
//     if (deviceInfo.kind === 'audioinput') {
//       option.text = deviceInfo.label ||
//         'microphone ' + (audioSelect.length + 1);
//       audioSelect.appendChild(option);
//     } else if (deviceInfo.kind === 'videoinput') {
//       option.text = deviceInfo.label || 'camera ' +
//         (videoSelect.length + 1);
//       videoSelect.appendChild(option);
//     } else {
//       console.log('Found another kind of device: ', deviceInfo);
//     }
//   }
// }

// function getStream() {
//   console.log('inside getStream')
//   if (window.stream) {
//     window.stream.getTracks().forEach(function(track) {
//       track.stop();
//     });
//   }

//   navigator.mediaDevices.getUserMedia(constraints).
//     then(gotStream).catch(handleError);
// }

// function gotStream(stream) {
//   console.log('inside gotStream')
//   window.stream = stream; // make stream available to console
//   videoElement.srcObject = stream;
// }

// function handleError(error) {
//   console.error('inside handleError')
//   console.error('Error: ', error);
// }

//-----------------------------

});
const videoELement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to videi element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoELement.srcObject = mediaStream;
    videoELement.onloadedmetadata = () => {
      videoELement.play();
    }
  }catch(error){
    console.log('OOPS! Error Here...')
  }
}

button.addEventListener('click', async () => {
  // Disabling button
  button.disabled = true; 
  // Start Picture in Picture
  await videoELement.requestPictureInPicture();
  button.disabled = false;
})

// On Load
selectMediaStream();
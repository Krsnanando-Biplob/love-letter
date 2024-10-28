// Create an audio element and set the source to the sound file
const clickSound = new Audio('./audio/রুপবতী_এক_মেয়ের_প্রেমে_পড়েছি___Md_Asad_RpR___Farhan___Tiktok_Viral_Song___Bangla_Music_007🔥(256k).mp3');

// Select the button element
const button = document.getElementById('clickButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Play the sound when the button is clicked
  clickSound.play();
});

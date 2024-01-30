let audio = document.getElementById("audio"); // Take the audio element
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next"); // Take the button to switch the next track

// Array with song titles
let playlist = [
    'track1.mp3',
    'track2.mp3',
    'track3.mp3',
    'track4.mp3',
];
 
let track; // Variable with track index
 
// Event before page loading
window.onload = function() {
    track = 0; // Assign zero to the variable
}

function switchTrack (numTrack) {
    // Change the src attribute value
    audio.src = './audio/' + playlist[numTrack];
    // Assign a song time of zero
    audio.currentTime = 0;
    // Play the song
    audio.play();
}

btnPlay.addEventListener("click", function() {
    audio.play(); // Start the song
    // Start interval 
    audioPlay = setInterval(function() {
        // Get the value of what second the song is at
        let audioTime = Math.round(audio.currentTime);
        // We get songs all the time
        let audioLength = Math.round(audio.duration)
        // Assign a width to an element at time
        time.style.width = (audioTime * 100) / audioLength + '%';
        // Compare what second the track is now and how long in total
        // And check that the treck variable is less than four
        if (audioTime == audioLength && track < 3) {
            track++; // then Increase the variable 
            switchTrack(track); // change track
        // Otherwise we check the same, but the treck variable is greater than or equal to four
        } else if (audioTime == audioLength && track >= 3) {
            track = 0; // then we assign treck to zero
            switchTrack(track); // Change track
        }
    }, 10)
});
btnPause.addEventListener("click", function() {
    audio.pause(); // Stops the song
    clearInterval(audioPlay) // stops the interval
    });
btnPrev.addEventListener("click", function() {
    // Check that the treck variable is greater than zero
    if (track > 0) {
        track--; // If true, reduce the variable by one
        switchTrack(track); // Change the song.
    } else { // Otherwise
        track = 3; // Assign three
        switchTrack(track); // Change the song
    }
});

btnNext.addEventListener("click", function() {
    // Check that the treck variable is greater than three
    if (track < 3) { // If so
        track++; // increase it by one
        switchTrack(track); // Change the song 
    } else { // Otherwise
        track = 0; // Assign a zero to it
        switchTrack(track); // Change the song
    }
});
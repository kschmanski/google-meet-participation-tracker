/**
 * Updates the background color of the Google Meet participant to gray or white.
 *
 * @return void
 */
updateParticipantBackgroundColor = function() {
    var newColor = "gray";
    if (this.style.backgroundColor == "gray") {
        newColor = "white";
    }
    this.style.backgroundColor = newColor;
    this.firstChild.style.backgroundColor = newColor;
}

/**
 * Updates the opacity of the Google Meet participant.
 *
 * @return void
 */
updateParticipantOpacity = function() {
    newOpacity = "0.2"
    if (this.style.opacity == newOpacity) {
        newOpacity = "1";
    }
    this.style.opacity = newOpacity;
}

/**
 * Runs the extension. Loads the Google Meet participants and adds their onClick events
 * to update the background.
 *
 * @return void
 */
runExtension = function() {
    var participants_div = document.querySelector('[aria-label="Participants"]');
    var participants = participants_div.children;

    for (const participant of participants) {
        //participant.addEventListener('click', updateParticipantBackgroundColor);
        participant.addEventListener('click', updateParticipantOpacity);
    }
}

// Wait for Google Meet to load, then execute
setInterval(runExtension, 5000);
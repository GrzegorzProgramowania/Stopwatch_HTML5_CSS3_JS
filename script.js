let buttonStart = document.querySelector(`button.main`);
let buttonReset = document.querySelector(`button.reset`);
let textParagrapg = document.querySelector(`.time div`);
let textDiv = document.querySelector(`.time p`);
let start = false;
let seconds = 0;
let newInterval;

function toggle() {
    start = !start;
    if (start) {
        startTimer();
    }
    else {
        stopTimer();
    }
}

function startTimer() {
    addSeconds();
    newInterval = setInterval(addSeconds, 10);
}

function addSeconds() {
    buttonStart.textContent = `Pauza`;
    seconds++;
    textParagrapg.textContent = (seconds / 100).toFixed(2);
}

function stopTimer() {
    buttonStart.textContent = `Start`;
    textParagrapg.textContent = (seconds / 100).toFixed(2);
    clearInterval(newInterval);
}

function resetTimer() {
    clearInterval(newInterval);
    buttonStart.textContent = `Start`;
    textDiv.textContent = `Czas od startu:`;
    textParagrapg.textContent = `---`;
    start = false;
    seconds = 0;

}

buttonStart.addEventListener(`click`, toggle);
buttonReset.addEventListener(`click`, resetTimer);
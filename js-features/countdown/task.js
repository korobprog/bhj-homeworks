let time = 3600;
const countDownEL = document.getElementById("timer");

setInterval(updateCountdown, 1000 );

function updateCountdown() {
const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countDownEL.innerHTML = `${minutes}:${seconds}`;
    time--;
}
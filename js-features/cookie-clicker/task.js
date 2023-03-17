const clicker = document.getElementById('cookie');
let statusCounter = document.getElementById('clicker__counter'),
    statusSpeed = document.getElementById('clicker__speed');
let start = 0;
let end = 0;

clicker.onclick = () => {
    statusCounter.textContent = Number(statusCounter.textContent) + 1;
    if (clicker.width === 200) {
        clicker.width += 100;
        start = new Date();
    } else {
        clicker.width = 200;
        end = new Date();
    }
    statusSpeed.textContent = ((1 / Math.abs(end - start)) * 1000).toFixed(2)
}
let sec = 0;
let startPrint;

function startTimer(){
    setInterval(() => {
        sec++;
    }, 1000);
}

function writeTimer(){
    let pTimer = document.getElementById('timer');
    let hour = `${Math.floor(Math.floor(sec/3600)/10)}${Math.floor(sec/3600)%10}`;
    let minutes = `${Math.floor(Math.floor(sec/60)%60/10)}${Math.floor(sec/60)%60%10}`;
    let seconds = `${Math.floor(sec%60/10)}${(sec%60%10)}`;
    pTimer.innerText = `${hour}:${minutes}:${seconds}`;
}

startTimer();
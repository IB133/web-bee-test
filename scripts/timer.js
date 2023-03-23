let sec = 0;
let intervalId;

function startTimer(){
    setInterval(() => {
        sec++;
    }, 1000);
}

function writeTimer(){
    let pTimer = document.getElementById('timer');
    let h = `${Math.floor(Math.floor(sec/3600)/10)}${Math.floor(sec/3600)%10}`;
    let m = `${Math.floor(Math.floor(sec/60)%60/10)}${Math.floor(sec/60)%60%10}`;
    let s = `${Math.floor(sec%60/10)}${(sec%60%10)}`;
    pTimer.innerText = `${h}:${m}:${s}`;
}

startTimer();
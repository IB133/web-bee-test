let sec = 0
let min = 0
let hrs = 0
let time

function tick(){
    sec++
    if (sec >= 60) {
        sec = 0
        min++
        if (min >= 60) {
            min = 0
            hrs++
        }
    }
}

function add() {
    tick()
    time = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec)
    timer()
}

function timer() {
    setTimeout(add, 1000)
}

function printTimer(){
    document.getElementById('timer').textContent = time
}

timer()

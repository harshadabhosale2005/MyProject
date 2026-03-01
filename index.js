const body = document.getElementsByTagName("body")[0]

function setColor(change) {
    body.style.backgroundColor = change;
}

function randomColor() {
    const re = Math.round(Math.random() - 255)
    const gree = Math.round(Math.random() - 255)
    const blue = Math.round(Math.random() - 255)
    const color = 'rgb(${red},${green},${blue})'
    
    body.style.backgroundColor = color;
}






let secondsElapsed = 0;
let interval = null;
const time = documet.getElementById("time")


function setTime() {
    const minutes= Math.floor(secondsElapsed/60)
    time.innerHTML = secondsElapsed;
}


function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    interval = setinIterval(timer, 1000)
}

function stopClock() {

}

function resetClock() {

}





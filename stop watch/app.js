let start= document.querySelector("#start");
let stop= document.querySelector("#stop");
let reset= document.querySelector("#reset");
let counter= document.querySelector("#counter");
let seconds=0;
let minutes=0;
let hours=0;
let user;

function timer(){
    seconds++;
    if (seconds===60){
        minutes++;
        seconds=0;
        if (minutes===60){
            hours++;
            minutes=0;
        }
    }

    let h=hours < 10 ? "0" + hours : hours;
    let m=minutes < 10 ? "0" + minutes : minutes;
    let s=seconds < 10 ? "0" + seconds : seconds;

    counter.innerText = `${h}:${m}:${s}`;
    start.setAttribute('disabled','disabled')
    stop.removeAttribute('disabled', 'disabled');
    

}


function Startcounter() {
    user = setInterval(timer, 100);
}


function Stopcounter() {
    clearInterval(user);
    start.removeAttribute('disabled', 'disabled');
    stop.setAttribute('disabled', 'disabled');
}

function Resetcounter() {
    clearInterval(user)
    seconds = 0;
    minutes = 0;
    hours = 0;
    counter.innerText = '00:00:00';
}



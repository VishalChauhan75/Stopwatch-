var startstopbtn = document.getElementById('startStopbtn');
var display = document.getElementById('display');
var timer;
var second = 0;
var minute = 0;


function startstop(){
    if(startstopbtn.value === 'start'){
        startstopbtn.value= 'stop';
        timer = setInterval(updateDisplay, 1000);
    }else{
        startstopbtn.value = 'start';
        clearInterval(timer);
    }
}
function updateDisplay(){
    second ++;
    if(second ===60){
        second = 0;
        minute++;
    }
    display.textContent = `${minute}:${second <10 ? '0' : ''}${second} `
}
function reset(){
    clearInterval(timer);
    second = 0;
    minute = 0;
    display.textContent='0:00';
    startstopbtn.value = 'start';
    
}

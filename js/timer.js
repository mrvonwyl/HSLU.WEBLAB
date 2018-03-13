var timer;
var timerActive;



$(function(){
    setInterval(function(){
        if(timerActive) {
            timer = Math.max(0, timer - 1);
            updateTimerElement();
        }
    }, 1000);

    $('.start').click(function(){
        startTimer();
    });

    $('.stop').click(function(){
        stopTimer();
    });

    $('.reset').click(function(){
        resetTimer();
    });

    $('.addMin').click(function(){
        addMin()
    });

    $('.subMin').click(function(){
        subMin()
    });

    $('.addSec').click(function(){
        addSec()
    });

    $('.subSec').click(function(){
        subSec()
    });


    resetTimer();
    startTimer();
});

function updateTimerElement(){
    $('.timer').html(convertTimer(timer));
}

function startTimer(){
    console.log("start");
    timerActive = true;
}

function stopTimer(){
    console.log("stop");
    timerActive = false;
}

function resetTimer() {
    timer = 120;
    updateTimerElement();
}

function addMin() {
    timer += 60;
    updateTimerElement();
}

function subMin(){
    timer = Math.max(0, timer - 60);
    updateTimerElement();
}

function addSec() {
    timer++;
    updateTimerElement();
}

function subSec(){
    timer = Math.max(0, timer - 1);
    updateTimerElement();
}

function convertTimer(t){
    var sec = t % 60;
    var secStr = "000" + sec;
    var min = (t - sec) / 60;
    var minStr = "000" + min;

    return right(minStr, 2) + ":" + right(secStr, 2);
}

function right(text, offset){
    return text.substr(text.length - offset);
}
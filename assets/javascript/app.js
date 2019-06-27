window.onload = function() {

};



var intervalId;
var clockRunning = false;

$("timer").text("00:00");

function start() {

    if (!clockRunning) {
        intervalId = setInterval(count, 1000 * 30);
        clockRunning = true;
    }

} 
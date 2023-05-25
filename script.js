const time = document.getElementById("time");
const mainButton = document.getElementById("button");
const resetButton = document.getElementById("reset");

let currentTime="00:00";
let initialTime;
let countdownInterval;

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

        var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;

    if(minutes.length === 1)minutes = "0" + minutes;
    if(seconds.length === 1) seconds = "0" + seconds;

    currentTime = minutes + ":" + seconds;
    initialTime = currentTime;
    time.textContent = `${currentTime}`;

    document.getElementById("form").reset();
    mainButton.textContent = "Start";
    clearInterval(countdownInterval);
})

mainButton.addEventListener('click', ()=>{
    timerEvents(mainButton);
});

resetButton.addEventListener('click', ()=>{
    clearInterval(countdownInterval);
    mainButton.textContent = "Start";
    currentTime = initialTime;
    time.textContent = `${currentTime}`;
});



function timerEvents(mainButton) {
    if(mainButton.textContent === "Start") {
        mainButton.textContent = "Pause";
        change();
    } else if (mainButton.textContent === "Pause") {
        mainButton.textContent = "Resume";
        clearInterval(countdownInterval);
    } else {
        mainButton.textContent = "Pause";
        change();
    }
}

function change() {
    countdownInterval = setInterval(changeTime, 1000);
}

function changeTime() {
    let temp = currentTime.split(':')
    time.textContent = `${currentTime}`
    if(temp[0] ==="00" && temp[1] === "00") {
        clearInterval(countdownInterval);
        return;
    } else if(temp[1]==="00") {
        temp[0] = parseInt(temp[0]);
        temp[0] --;
        temp[0] = temp[0].toString();
        if(temp[0].length === 1) temp[0] = "0" + temp[0];
        temp[1] = "59";
    } else {
        temp[1] = parseInt(temp[1]);
        temp[1] --;
        temp[1] = temp[1].toString();
        if(temp[1].length === 1) temp[1] = "0" + temp[1];
        // console.log(temp[1]);

    }
    currentTime = temp[0] + ":" + temp[1];
    time.textContent = `${currentTime}`
}



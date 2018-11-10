var breakLength = document.getElementById('break');
var sessionLength = document.getElementById('session-length');
var sessionTimer = document.getElementById('session-timer');
var timerLabel = document.getElementById("sessionLabel");
var audio = document.getElementsByTagName('audio')[0];
var sessionCounter = sessionTimer.textContent;
var breakCounter = breakLength.textContent;

var breakMinus = document.getElementById('breakMinus');
var breakPlus = document.getElementById('breakPlus');
var sessionMinus = document.getElementById('sessionMinus');
var sessionPlus = document.getElementById('sessionPlus');

breakMinus.addEventListener("click",function(){
  clearInterval(interval);
  breakLength.textContent--;
  bMin = breakLength.textContent;
  sMin = sessionLength.textContent;
  sSec = 0;
  bSec = 0;
  sTotalSecs = sMin * 60;
  bTotalSecs = bMin * 60;
  timer.style.backgroundImage = "none";
});
  
breakPlus.addEventListener("click", function(){
  clearInterval(interval);
  breakLength.textContent++;
  bMin = breakLength.textContent;
  sMin = sessionLength.textContent;
  sSec = 0;
  bSec = 0;
  sTotalSecs = sMin * 60;
  bTotalSecs = bMin * 60;
  timer.style.backgroundImage = "none";
});

sessionMinus.addEventListener("click", function(){
    clearInterval(interval);
    sessionLength.textContent--;
    sessionTimer.textContent = sessionLength.textContent;
    sMin = sessionLength.textContent;
    sSec = 0;
    bSec = 0;
    sTotalSecs = sMin * 60;
    bTotalSecs = bMin * 60;
    timer.style.backgroundImage = "none";
});

sessionPlus.addEventListener("click", function(){
    clearInterval(interval);
    sessionLength.textContent++;
    sessionTimer.textContent = sessionLength.textContent;
    sMin = sessionLength.textContent;
    sSec = 0;
    bSec = 0;
    sTotalSecs = sMin * 60;
    bTotalSecs = bMin * 60;
    timer.style.backgroundImage = "none";
});

var timer = document.getElementById('timer');

var sMin = sessionLength.textContent;
var sSec = 0;
var bMin = breakLength.textContent;
var bSec = 0;

var interval = null;

timer.addEventListener('click', timerEvent);

function timerEvent(e){

  if(interval != null){
    clearInterval(interval);
    interval = null;
    e.preventDefault();
  }
  if(interval == null){
    if(sMin  == 0 && sSec == 0){
      breakTime();
      e.preventDefault();
    }
    sessionTime();
    e.preventDefault();
  }
}

var sTotalSecs;

function sessionTime(){
  sTotalSecs = sMin * 60;

  sMin = sMin;
  sSec = sSec;
  
  interval = setInterval(function(){
    
    if (sSec == 0 && sMin > 0) {
    sSec = 59;
    sMin--;

    }
    sessionTimer.textContent = (("0" + sMin).slice(-2) + ":" + ("0" + sSec).slice(-2));
    if (sSec > 0) {
      sSec--;
    }
      if(sSec == 0 && sMin == 0){
        console.log("Done");
        window.clearInterval(interval);
        breakTime();
        console.log("Going on Break");
      }
    var pWhite = ((((((sMin) * 60) + sSec) / sTotalSecs) * 100));
    
    timer.style.backgroundImage = "linear-gradient(to bottom, #071629 " + pWhite + "%, #7CAD5E 0%)";
  },1000);
  
  

}

var bTotalSecs;
var breakTime = function(){
  bTotalSecs = bMin * 60;
  
  sessionTimer.textContent = (("0" + bMin).slice(-2) + ":" + ("0" + bSec).slice(-2));
  
  bMin = bMin;
  bSec = bSec;
  
  timerLabel.innerHTML = "Break";
  
  interval = setInterval(function(){
      if (bSec == 0 && bMin > 0) {
      bSec = 59;
      bMin--;

      }
      sessionTimer.textContent = (("0" + bMin).slice(-2) + ":" + ("0" + bSec).slice(-2));
      if (bSec > 0) {
        bSec--;
      }
    
    var pWhite = ((((((bMin) * 60) + bSec) / bTotalSecs) * 100));
    
    timer.style.backgroundImage = "linear-gradient(to top, #7CAD5E " + pWhite + "%, #071629 0%)";
  
  if(bSec === 0 && bMin === 0){
    audio.play();
    window.clearInterval(interval);
    console.log("done with break");
    reset();
    //resetPage();
  }
  },1000);
}

var resetPage = function(){
  
  breakLength.textContent = 5;
  sessionLength.textContent = 25;
  timerLabel.innerHTML = "Session";
  sessionTimer.textContent = sessionLength.textContent;
  console.log("Page has been reset");
  
}
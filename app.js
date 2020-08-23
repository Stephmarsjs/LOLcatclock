const wakeupTime = 10;
const naptime = 5;
const bedTime = 11;

var clock = document.getElementById('displayClock');

setInterval(function(){
  clock.innerHTML = getCurrentTime();
}, 1);

function getCurrentTime() {
  const currentDate = new Date();
  var hours = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
  hours === 0 ? hours = 12 : hours = hours;
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds();
  var currentTime = hours + ':' + minutes + ':' + seconds;
  return currentTime;
}

// Getting the clock to increment and change out messeges and pictures
 const updateClock = function() {
    let time = new Date().getHours();
    let messageText;
    let image = "https://i.pinimg.com/originals/6b/fa/43/6bfa4355439a163043b451bd4934bf59.jpg";
    
    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJS = document.getElementById('lolcatImage');

    if (time == bedTime) {
        image = "https://i.pinimg.com/originals/ed/98/98/ed9898282828272552f2e64a923d9884.jpg";
        messageText = "Time for bed ... zzz"
    }
    else if (time == wakeupTime) {
        image = "https://i.pinimg.com/originals/b2/d9/2c/b2d92c6aa61b5ba1a1cf9e633d454e16.jpg";
        messageText = "Time to Wake up!" 
    }
    else if (time == naptime) {
        image = "https://i.pinimg.com/originals/12/21/ff/1221ff6f62859089605423ba6dfdbad5.jpg";
        messageText = "Nap time ... "
    }
    else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Helluuuur"
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImageJS.src= image;
    
 }

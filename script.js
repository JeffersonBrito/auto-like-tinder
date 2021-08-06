let startButton = document.createElement("div");
startButton.classList.add('startButton');
startButton.innerHTML = 'Iniciar';

document.body.appendChild(startButton);

let isStarted = 0;
let howMany = 0;
let autoClick;

startButton.onclick = function() {
  if (isStarted === 0) {
    isStarted = 1;
    let e = document.getElementsByClassName('button');

    autoClick = setInterval(function(){
      e[3].click();
      howMany++;
      startButton.classList.add('stopButton');
      startButton.innerHTML = 'Parar (Curtidas: ' + howMany + ')';
    }, 500);
  }
  else {
    isStarted = 0;
    clearInterval(autoClick);
    startButton.classList.remove('stopButton');
    startButton.innerHTML = 'Iniciar (Curtidas: ' + howMany + ')';
  }
}
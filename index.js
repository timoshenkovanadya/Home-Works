const CONTAINER = document.querySelector('body');

class Button {
    constructor(content, parent, onClick) {
        this.parent = parent;
        this.button = document.createElement('button');
        this.button.className = 'button';
        this.button.textContent = content;
        this.parent.append(this.button);
        this.button.addEventListener('click', onClick);
    }
}

class Stopwatch {
    constructor(parent){
        this.parent = parent;
        this.stopwatch = document.createElement('div');
        this.stopwatch.className = 'stopwatch-container';
        this.parent.append(this.stopwatch);
        this.stopwatchDisplay = document.createElement('div');
        this.stopwatchDisplay.className = 'stopwatch-display';
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.className = 'button-container';
        this.startButton = new Button('start', this.buttonContainer, this.start);
        this.stopButton = new Button('stop', this.buttonContainer, this.stop);
        this.resetButton = new Button('reset', this.buttonContainer, this.reset);
        this.stopwatch.append(this.stopwatchDisplay, this.buttonContainer);
        this.time = 0;
        this.timeInterval = null;
        this.showOnDisplay();        
    }

    start = () => {
        if (this.timeInterval) return;
        this.timeInterval = setInterval(() => {
          this.time++;
          this.showOnDisplay();
        }, 1000);
      }
    
      stop = () => {
        clearInterval(this.timeInterval);
        this.timeInterval = null;
      }
    
      reset = () => {
        this.stop();
        this.time = 0;
        this.showOnDisplay();
             }
    
      showOnDisplay = () => {
        const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(2, '0');
        const seconds = String(this.time % 60).padStart(2, '0');
        this.stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
      }

};

class Timer {
    constructor(parent){
        this.parent = parent;
        this.timer = document.createElement('div');
        this.timer.className = 'timer';
        this.parent.append(this.timer);
        this.timerDisplay = document.createElement('div');
        this.timerDisplay.className = 'timer-display';
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.className = 'button-container';
        this.startButton = new Button('start', this.buttonContainer, this.start);
        this.stopButton = new Button('stop', this.buttonContainer, this.stop);
        this.resetButton = new Button('reset', this.buttonContainer, this.reset);
        this.plusMinuteButton = new Button('+1m', this.buttonContainer, this.addOneMinute);
        this.plusSecButton = new Button('+1s', this.buttonContainer, this.addOneSecond);
        this.timer.append(this.timerDisplay, this.buttonContainer);
        this.time = 0;
        this.interval = null;
        this.updateDisplay();

    }

    start = () => {
        if (this.interval) return;
        this.interval = setInterval(() => {
          if (this.time > 0) {
            this.time--;
            this.updateDisplay();
          } else {
            this.stop();
          }
        }, 1000);
        
      }
    
      stop = () => {
        clearInterval(this.interval);
        this.interval = null;
      }
    
      reset = () => {
        this.stop();
        this.time = 0;
        this.updateDisplay();
      }
    
      addOneMinute = () => {
        if (this.interval) return;
        this.time += 60;
        this.updateDisplay();
      }
    
      addOneSecond = () => {
        if (this.interval) return;
        this.time += 1;
        this.updateDisplay();
      }
    
      updateDisplay = () => {
        const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(2, '0');
        const seconds = String(this.time % 60).padStart(2, '0');
        this.timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
      }


}

const stopwatch = new Stopwatch(CONTAINER);
const TIMER = new Timer(CONTAINER);

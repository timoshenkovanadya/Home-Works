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

    }
}

const stopwatch = new Stopwatch(CONTAINER);
const TIMER = new Timer(CONTAINER);

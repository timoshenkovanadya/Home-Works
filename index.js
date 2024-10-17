const CONTAINER = document.querySelector('body');

class BaseComponent {
  constructor({ parent, tag = 'div', className = '', content = '' }) {
    this.parent = parent;
    this.element = document.createElement(tag);
    this.element.className = className;
    this.element.textContent = content;
    this.parent.append(this.element);
  }
  setContent = (text) => {
    this.element.textContent = text;
  };
}

class Button extends BaseComponent {
  constructor(content, parent, onClick) {
    super({ parent, tag: 'button', className: 'button', content });
    this.element.onclick = onClick;
  }
}

class Stopwatch extends BaseComponent {
  constructor(parent) {
    super({ parent, className: 'stopwatch' });

    this.label = new BaseComponent({
      parent: this.element,
      content: 'Stopwatch',
    });
    this.display = new BaseComponent({
      parent: this.element,
      className: 'display',
    });
    this.controls = new BaseComponent({
      parent: this.element,
      className: 'controls',
    });

    this.startButton = new Button('start', this.controls.element, this.start);
    this.stopButton = new Button('stop', this.controls.element, this.stop);
    this.resetButton = new Button('reset', this.controls.element, this.reset);

    this.time = 0;
    this.timeInterval = null;
    this.showOnDisplay();
  }

  start = () => {
    if (this.timeInterval) 
        {return};
    this.timeInterval = setInterval(() => {
      this.time++;
      this.showOnDisplay();
    }, 1000);
  };

  stop = () => {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  };

  reset = () => {
    this.stop();
    this.time = 0;
    this.showOnDisplay();
  };

  showOnDisplay = () => {
    const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(
      2,
      '0'
    );
    const seconds = String(this.time % 60).padStart(2, '0');
    this.display.setContent(`${hours}:${minutes}:${seconds}`);
  };
}

class Timer extends Stopwatch {
  constructor(parent) {
    super(parent);
    this.startButton.element.onclick = this.start;
    this.label.setContent('Timer');
    this.plusMinuteButton = new Button(
      '+1m',
      this.controls.element,
      this.addTime(60)
    );
    this.plusSecButton = new Button(
      '+1s',
      this.controls.element,
      this.addTime(1)
    );
  }

  start = () => {
    if (this.timeInterval) 
        {return};
    this.timeInterval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        this.showOnDisplay();
      } else {
        this.stop();
      }
    }, 1000);
  };

  addTime = (amount) => () => {
    if (this.timeInterval) 
        {return};
    this.time += amount;
    this.showOnDisplay();
  };
}

new Stopwatch(CONTAINER);
new Timer(CONTAINER);

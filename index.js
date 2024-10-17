const CONTAINER = document.querySelector('body');

class Button {
  constructor(parent) {
    this.parent = parent;
    this.button = document.createElement('div');
    this.button.className = 'button';
    this.button.textContent = 'Click me!';
    this.button.onmouseover = this.buttonMouseoverHandler;
    this.button.onclick = this.buttonClickHandler;
  }

  buttonClickHandler = () => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    this.button.style.position = 'absolute';
    this.button.style.left = `${randomX}%`;
    this.button.style.top = `${randomY}%`;
  };

  buttonMouseoverHandler = () => {
    const randomPercent = Math.floor(Math.random() * 100) + 1;

    if (randomPercent <= 50) {
      this.buttonClickHandler();
    }
  };

  render() {
    this.parent.append(this.button);
  }
}


const BUTTON = new Button(CONTAINER);
BUTTON.render();


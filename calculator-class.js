class Calculator {
  constructor(firstNumber, secondNumber) {
    this.checkIsValid(firstNumber);
    this.checkIsValid(secondNumber);
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  checkIsValid(number) {
    if (typeof number !== 'number' || !Number.isFinite(number)) {
      throw new Error('Argument is not a finite number');
    }
  } // Should be separated in an independent reusable function in a larger code, but here is a method, because we create only this class

  setX(number) {
    this.checkIsValid(number);
    this.firstNumber = number;
  }

  setY(number) {
    this.checkIsValid(number);
    this.secondNumber = number;
  }

  logSum = () => {
    return this.firstNumber + this.secondNumber;
  }; 

  logMul = () => {
    return this.firstNumber * this.secondNumber;
  };

  logSub = () => {
    return this.firstNumber - this.secondNumber;
  };

  logDiv = () => {
    if (this.secondNumber === 0) {
      throw new Error('Division by zero is prohibited');
    }

    return this.firstNumber / this.secondNumber;
  };
}



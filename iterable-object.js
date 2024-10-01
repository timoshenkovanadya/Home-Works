const myIterable = {
  from: 2,
  to: 5,
};

myIterable[Symbol.iterator] = function () {
  if (typeof this.from !== "number" || typeof this.to !== "number") {
    throw new Error('"to" or "from" are not specified or are not numbers');
  }

  if (this.to < this.from) {
    throw new Error('"to" must be grater or equal to "from"');
  }

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// Example:

// for (let item of myIterable) {
//   console.log(item);
// }

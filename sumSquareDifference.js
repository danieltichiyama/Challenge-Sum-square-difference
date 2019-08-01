class SumOfASquare {
  constructor(num) {
    this.num = num;
  }

  sumOfSquares() {
    let sum = 0;

    for (let i = this.num; i > 0; i--) {
      sum += i * i;
    }
    return sum;
  }

  squareOfTheSums() {
    let sum = 0;
    for (let i = this.num; i > 0; i--) {
      sum += i;
    }
    return sum * sum;
  }
}

//added this comment to make my dev different from my master, sorry...

module.exports = {
  SumOfASquare
};

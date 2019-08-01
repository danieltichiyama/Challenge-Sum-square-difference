const expect = require("chai").expect;

const SumOfASquare = require("../sumSquareDifference").SumOfASquare;
const test = require("../sumSquareDifference");

describe("Difference between sum of squares and squares of sum", function() {
  it("for the first 10 natural numbers is 2640", function() {
    const squareSummer = new SumOfASquare(10);
    console.log("------------------------");
    console.log("var squareSummer" + "", squareSummer.sumOfSquares());
    console.log("------------------------");
    expect(squareSummer.sumOfSquares()).equal(385);
    expect(squareSummer.squareOfTheSums()).equal(3025);
    expect(squareSummer.squareOfTheSums() - squareSummer.sumOfSquares()).equal(
      2640
    );
  });

  it("for the first 100 natural numbers is 25164150", function() {
    const squareSummer = new SumOfASquare(100);
    expect(squareSummer.sumOfSquares()).equal(338350);
    expect(squareSummer.squareOfTheSums()).equal(25502500);
    expect(squareSummer.squareOfTheSums() - squareSummer.sumOfSquares()).equal(
      25164150
    );
  });
});

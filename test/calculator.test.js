const Calculator = require("../src/calculator");

describe("Simple Calculator.", () => {
  let calculator = new Calculator();

  test("Add", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Subtract", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("Divide", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test("Multiply", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
  });

  test("Add when undefined", () => {
    expect(calculator.add()).toBe(NaN);
  });

  test("Subtract when undefined", () => {
    expect(calculator.subtract()).toBe(NaN);
  });

  test("Divide when undefined", () => {
    expect(calculator.divide()).toBe(NaN);
  });

  test("Multiply when undefined", () => {
    expect(calculator.multiply()).toBe(NaN);
  });
});

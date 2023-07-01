const { reverseString } = require("../src/reverseString");

describe("Reverses a string.", () => {
  test("Reverse String", () => {
    expect(reverseString("sami")).toBe("imas");
  });

  test("Is Undefined", () => {
    expect(reverseString()).toBe("");
  });

  test("Is Null", () => {
    expect(reverseString(null)).toBe("");
  });
});

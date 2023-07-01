const { caesarCipher } = require("../src/caesarCipher");

describe("Caesar Cipher", () => {
  test("Test 1", () => {
    expect(caesarCipher("a", 1)).toBe("b");
  });
  test("Test 2", () => {
    expect(caesarCipher("b", 1)).toBe("c");
  });
  test("Test 3 (sami shift by 3)", () => {
    expect(caesarCipher("sami", 3)).toBe("vdpl");
  });
  test("Test 4 (hello world shift by 7)", () => {
    expect(caesarCipher("hello world", 7)).toBe("olssv dvysk");
  });
});

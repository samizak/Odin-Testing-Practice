const { capitalizeFirstLetter } = require("../src/capitalize");

describe("Capitalize first character of the string.", () => {
  test("Name", () => {
    expect(capitalizeFirstLetter("sami")).toBe("Sami");
  });

  test("Is Undefined", () => {
    expect(capitalizeFirstLetter()).toBe("");
  });

  test("Is Null", () => {
    expect(capitalizeFirstLetter(null)).toBe("");
  });
});

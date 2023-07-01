const { capitalizeFirstLetter } = require("../src/capitalize");

describe("Capitalize first character of the string.", () => {
  test("Name", () => {
    expect(capitalizeFirstLetter("sami")).toBe("Sami");
  });
});

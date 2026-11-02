const { add } = require("../src");

describe("BasicAddition", () => {
  test("adds two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});

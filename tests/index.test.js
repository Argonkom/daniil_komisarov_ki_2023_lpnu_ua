const { add } = require("../src");

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});

const multiply = require("./multiply.js");

describe("multiply", () => {
  it("multiplies 3 and 8", () => {
    expect(multiply(3, 8)).toBe(24);
  });
  it("multiplies 5 and 0", () => {
    expect(multiply(5, 0)).toBe(0);
  });
  it("multiplies -10 and 12", () => {
    expect(multiply(-10, 12)).toBe(-120);
  });
});

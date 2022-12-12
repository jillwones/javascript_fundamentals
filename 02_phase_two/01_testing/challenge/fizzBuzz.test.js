const fizzBuzz = require("./fizzBuzz.js");

describe("fizzBuzz", () => {
  it("returns Fizz when passed 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Buzz when passed 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("returns FizzBuzz when passed 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("returns Fizz when passed 18", () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  it("returns Buzz when passed 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
});

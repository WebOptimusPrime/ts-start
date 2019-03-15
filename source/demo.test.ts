import { someFn } from "./index";

describe("Some unit", () => {
  it("should do stuff", () => {
    expect(someFn(true)).toBe(0);
    expect(someFn(false)).toBe(1);
  });
});
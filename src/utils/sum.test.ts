import { sum } from "./sum";
import { describe, it, expect } from "vitest";


describe("sum", () => {

  it("adds two numbers", () => {

    expect(
      sum(2, 3)
    ).toBe(5);

  });

});
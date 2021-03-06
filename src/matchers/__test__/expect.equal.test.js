describe("expect.equal", () => {
  test("TODO 1", () => {
    expect(1 + 1).toBe(2);
  });
  test("TODO 2", () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });
  test("TODO 3", () => {
    expect(4).toBeGreaterThan(1);
  });
  test("TODO 4", () => {
    const fn = () => {};
    expect(fn).toBeInstanceOf(Function);
  });
  test("TODO 5", () => {
    expect(undefined).toBeUndefined();
  });
  test("TODO 6", () => {
    expect(null).toBeNull();
  });
  test("TODO 7", () => {
    expect(false).toBeFalsy();
    expect(0).toEqual(0);
    expect("").toMatch("");
  });
  test("TODO 8", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });
  test("TODO 9", () => {
    class LaCroix {
      constructor(flavor) {
        this.flavor = flavor;
      }
    }
    const expected = new LaCroix("lemon");
    expect(new LaCroix("lemon")).toEqual(expected);
  });
  test("TODO 10", () => {
    const expected = 3;
    expect([1, 2, 3]).toHaveLength(expected);
  });
});

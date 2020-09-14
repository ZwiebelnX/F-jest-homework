import getUsers from "../users";

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUsers()).resolves.toBe("test");
  });
});

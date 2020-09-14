import axios from "axios";
import { register } from "../user";

jest.mock("axios");
jest.mock("../verify");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe("register", () => {
  test("should post user when validated", () => {
    register("test", "test");
    expect(axios.post).toBeCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    await expect(register("fail", "test")).rejects.toThrowError(
      "wrong username or password"
    );
  });
});

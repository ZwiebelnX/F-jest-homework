const verifyPassword = jest.fn().mockImplementation(() => true);
const verifyUsername = jest
  .fn()
  .mockImplementation((username) => username === "test");

export { verifyPassword, verifyUsername };

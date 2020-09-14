export default {
  post: jest
    .fn()
    .mockImplementation(
      (url, data) =>
        new Promise((resolve) => resolve({ data: url, payload: data }))
    ),
  get: jest.fn().mockImplementation((url) => {
    return new Promise((resolve) => {
      resolve({ data: "test", url });
    });
  }),
};

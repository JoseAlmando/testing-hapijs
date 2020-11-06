const index = {
  method: "GET",
  path: "/",
  handler: async (request, h) => {
    return { "Books": "/book"};
  },
};

module.exports = { index };
const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: () => {
      return [];
    },
  },
};

module.exports = { resolvers };

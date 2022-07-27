const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello World",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
  },
};

module.exports = { resolvers };

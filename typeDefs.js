const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String
    getAllTasks: [Task]
    getTask(id: ID): Task
  }

  #create task
  type Mutation {
    createTask(title: String, description: String): Task
    deleteTask(id: ID): String
  }
`;

module.exports = { typeDefs };

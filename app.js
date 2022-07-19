const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const app = express();

app.get('/', (req, res) => res.send('Welcome to my api'));

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  //Initialize apollo instance
  await apolloServer.start();

  apolloServer.applyMiddleware({app});

  app.listen(3000, () => {
    console.log("Server on port", 3000);
  });
}

//First execution
start();

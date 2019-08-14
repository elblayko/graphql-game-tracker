const HTTP_PORT = 4000;

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(HTTP_PORT, () =>
  console.log(`Application listening on port ${HTTP_PORT}.`)
);

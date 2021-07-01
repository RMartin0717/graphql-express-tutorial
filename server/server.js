const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')

//construct a schema, using graphql schema lang

const schema = buildSchema(`
    type Query {
      hello: String
    }`);

//the root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

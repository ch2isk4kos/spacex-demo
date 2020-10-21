const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const PORT = process.env.PORT || 3000;

const app = express();

// enable cross-origin resource sharing
app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true	// @TODO: set to false in prod. 
}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// go to: http://localhost:3000/graphql

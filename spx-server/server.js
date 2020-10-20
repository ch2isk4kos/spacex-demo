const express = require("express");
const graphqlHTTP = ("express-graphql");
const PORT = process.env.PORT || 3000

const app = express();

app.use("/graphql", graphqlHTTP({
  schema,
  graphql: true  
}));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`);

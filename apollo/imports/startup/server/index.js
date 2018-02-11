// Apollo server allows for apollo server + graphql to work together - available on client-side as API
// Replaces: API parts  |  Mutations - replace server side routes  |  meteor methods 
// Data container = pulls whatever data you need
// Query database directly from client

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

// Resolvers(database queries) and type definitions(schema) 👈🏻
createApolloServer({});

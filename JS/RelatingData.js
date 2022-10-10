const {ApolloServer} = require("apollo-server");
const {typeDefs} = require ("../schema/schema");
const {Query } = require("../resolvers/Query")
const {Category } = require("../resolvers/Category")
const {Product } = require("../resolvers/Product")
 
const { categories,products, reviews} = require("../db/db")
 

 
/* need to specifiy type, def and resolvers as arguments in new apolloServer */
const server = new ApolloServer({
    typeDefs,
    resolvers : {
      Query,
        Product,
        Category
      },
      context: {
        categories,
        products,
        reviews,
      }
    
    }
);


server.listen().then(({url}) => {
    console.log("Server is ready at " + (url))
})
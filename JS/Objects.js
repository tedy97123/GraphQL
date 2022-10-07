const {ApolloServer, gql} = require("apollo-server");
const { products, categories} = require("../db/db")
 
//scalerTypes:String, Int, 4(float), Boolean, 
//type defs are where define the structure of our data (schema)
const typeDefs = gql`
    type Query {
        hello: String
        products:[Product!]!
        product(id: ID!): Product
        categories: [Catagory!]!
        catagory (id : ID!): Catagory
    }
    type Product {
        id : ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image : String!
        onSale: Boolean!
    }

    type Catagory {
        id: ID!
        name : String!
    }
`;

// reslovers are where we define the JSON  response.
const resolvers = {
    Query:{
        hello: (parent,args,context) => "Hi",

        products:(parent,args,context) => products,
        //if product id is not null in product object then return the productid to ProductId (search based on ID)
        product: (parent,args,context) => 
        {
            const {id} = args;
            return  products.find(product => product.id === id)
        },

        categories:(parent,args,context ) => categories,

        //destructure JSON 
        catagory:(parent,args,context) => 
        {
            const catagoryid = args.id;
            const {id} = args;
            return categories.find((category) => category.id === id)
        }
     }
};

/* need to specifiy type, def and resolvers as arguments in new apolloServer */
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({url}) => {
    console.log("Server is ready at " + (url))
})
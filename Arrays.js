const {ApolloServer, gql} = require("apollo-server");

//scalerTypes:String, Int, 4(float), Boolean, 
const typeDefs = gql`
    type Query {
        hello: [String!]!
    }
`;

const resolvers = {
    Query:{
        hello: () => {
            return ["Tedy","Loretta","Nylah"]
        },
    },
};

/* need to specifiy type, def and resolvers as arguments in new apolloServer */
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({url}) => {
    console.log("Server is ready at " + (url))
})
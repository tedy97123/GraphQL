/* Graphql (Apollo-server) API */

/* Instance of new Apollo server */
const {ApolloServer, gql} = require("apollo-server");

//scalerTypes:String, Int, 4(float), Boolean, 
const typeDefs = gql`
    type Query {
        hello: String!
        numberOfAnimals: Int
        Elepants: String 
        priceOfChetahs: Int
        priceOfAllBirds: Int
        priceOfAllApes: Int
        isExpensive: Boolean
    }
`

const resolvers = {
    Query:{
        hello: () => {
            return null
        },
        numberOfAnimals: () => {
            return 608;
        },
        Elepants: () => {
            return "Harold, Maria, Alice , Joan"
        },
        priceOfChetahs: () => {
            return 152;
        },
        priceOfAllBirds: () => {
            return 152;
        },
        priceOfAllApes: () => {
            return 152;
        },
        isExpensive: () => false,
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
const {gql} = require("apollo-server");

//scalerTypes:String, Int, 4(float), Boolean, 
//type defs are where define the structure of our data (schema)
exports.typeDefs = gql`
    type Query {
        hello: String
        products:[ Product ! ] !
        product( id : ID! ): Product
        categories: [ Category ! ] !
        category ( id : ID! ): Category
    }
    type Product {
        id : ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image : String!
        onSale: Boolean!
        category: Category
    }

    type Category {
        id: ID!
        name : String!
        products : [ Product !] !
    }

    type Reviews{
        id: String!
      date: Date!
      title: String!
      comment: String!
      rating: Int!
      productId: Int!
    }
`;
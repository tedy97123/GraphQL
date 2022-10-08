const {gql} = require("apollo-server");

//scalerTypes:String, Int, 4(float), Boolean, 
//type defs are where define the structure of our data (schema)
exports.typeDefs = gql`
    type Query {
        hello: String

        products( filter : ProductsFilterInput )  :  [ Product ! ] !

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

        reviews : [Review!] !
    }

    type Category {
        id: ID!

        name : String!

        products ( filter : ProductsFilterInput ) : [ Product !] !
    }

    type Review{
      id: ID!

      date: String!

      title: String!

      comment: String!

      rating: Int!
    }

    #reference products in Query.
    input ProductsFilterInput{

        onSale:Boolean
        averageRating: Int

    }
`;
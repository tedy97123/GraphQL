const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation{
    addCategory (input: addCategoryInput) : Category!
    addProduct (input: AddProductInput) : Product!
    addReviews(input: AddReviewsInput) : Review!
    deleteCategory(id : ID!) : Boolean!
  }
 
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    category: Category
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int!
  }

  input addCategoryInput{
    name: String!
  }

  input AddProductInput{
    name:String!
    description:String!
    quantity: Int!
    price: Float!  
    image: String!
    onSale:Boolean!
    categoryId: String!
  }

  input AddReviewsInput{
    
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId:ID!
  }
  `
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
    AddCategory (input: AddCategoryInput) : Category!
    AddProduct (input: AddProductInput) : Product!
    AddReviews(input: AddReviewsInput) : Review!
    DeleteCategory( id: ID! ) : Boolean!
    DeleteProduct( id: ID! ): Boolean!
    DeleteReview( id: ID! ): Boolean!
    UpdateCategory( id: ID! , input: UpdateCategoryInput! ) :  Category
    UpdateProduct( id: ID! , input: UpdateProductInput! ) :  Product
    UpdateReview( id: ID! , input: UpdateReviewInput! ) :  Review
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

  input UpdateCategoryInput{
    name: String!
  }

  input UpdateProductInput{
    name:String!
    description:String!
    quantity: Int!
    price: Float!  
    image: String!
    onSale:Boolean!
    categoryId: String
  }

  input UpdateReviewInput{
    name:String!
    description:String!
    quantity: Int!
    price: Float!  
    image: String!
    onSale:Boolean!
    categoryId: String
  }

  input AddCategoryInput{
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
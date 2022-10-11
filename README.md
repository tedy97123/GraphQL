# GraphQL

What is GraphQL?

GraphQL is a query language for APIs as well as a runtime for fulfilling queries with existing data. 
In simple terms, GraphQL is a syntax that describes how to ask for data. It’s generally used to load data from a server to a client.

GraphQL reduces the complexity of building APIs by abstracting all requests to a single endpoint. Unlike traditional REST APIs, it is declarative, meaning whatever is requested is returned.
When to use GraphQL

Of course, not all projects require GraphQL — it is merely a tool to consolidate data. It has well-defined schema, so we know for sure we won’t overfetch. 
But if we already have a stable RESTful API system where we rely on data from a single data source, we don’t need GraphQL.

For instance, let’s assume we are creating a blog for ourselves and we decide to store, retrieve, and communicate to data in a single MongoDB database. 
In this case, we are not doing anything architecturally complex, and we don’t need GraphQL.

On the other hand, let’s imagine we have a full-fledged product that relies on data from multiple sources (e.g., MongoDB, MySQL, Postgres, and other APIs).
In this case, we should use GraphQL.

For example, if we’re designing a portfolio site for ourselves and we want data from social media, and we also have our own database 
to maintain a blog, we can use GraphQL to write the business logic and schema. It will consolidate data as a single source of truth.

Once we have the resolver functions to dispatch the right data to the front end, we will easily be able to manage data within a single source.


What is CRUD?

When building an API, you want your model to provide four basic functionalities: it should be able to create, read, update, and delete resources. 
This set of essential operations is commonly referred to as CRUD.

RESTful APIs most commonly utilize HTTP requests. Four of the most common HTTP methods in a REST environment are GET, POST, PUT, and DELETE, which are the methods by 
which a developer can create a CRUD system.

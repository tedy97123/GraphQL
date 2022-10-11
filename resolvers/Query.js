const { reviews } = require("../db/db");

exports.Query = 
{
    hello: (parent,args,context) => "Hi",

    //resolving the filtering option in Products schema.
    //{filter} arg: gives acess to check state on onSale field given the choosen product. reffer to ProductfilterInput in schema.
    // avgRating /onSale resolvers. ( ln21 - ln27 ) -  filers onSale products and the products average rating.

    products:(parent,{filter},{db}) => 

    {
        let filteredProducts = db.products;
         
        if (filter) {
            const {onSale, avgRating} = filter
          if (onSale) {
            filteredProducts = filteredProducts.filter((product) => {
              return product.onSale;
            });
              
          }
          console.log("Average Rating:" ,  avgRating)
          if ([1, 2, 3, 4, 5].includes(avgRating)) {
            filteredProducts = filteredProducts.filter((product) => {
              let sumRating = 0;
              let numberOfReviews = 0;
              db.reviews.forEach((review) => {
                if (review.productId === product.id) {
                  sumRating += review.rating;
                  numberOfReviews++; 
                }
                return sumRating , numberOfReviews;
              });
              //console.log(sumRating , numberOfReviews , product.name)

              const avgProductRating = sumRating/numberOfReviews;
              console.log(filteredProducts)
              //console.log("This is the avg product rating : " , avgProductRating)
               
              return avgProductRating >= avgRating;

              
            });
          }
        }
        return filteredProducts
    },
     //Line 23 - 36
     //if the avgRating field =  1,2,3,4 then -->
     // iterating through the Products schema. 
     //In the forEach loop,  a nested Object is iterated through called reviews. It exits in the Product schema as a field.
     // whenth product id matches the review id we iterate through the review object and filter for rating.
     //Sumrating is = to the total review rating of all the objects in the review DB. numberOfReviews = the number of iterations of the forEach loop.

     

//based on the context/scope of this function, we are looking to return the productId based on the ID field for the table products. Then compairing the 

    product: (parent,{id},{db}) => {return  db.products.find((product) => product.id === id)},

    categories: (parent,args,{db} ) => db.categories,

    //destructure JSON 
    category: (parent,{id},{db})  => { return db.categories.find((category) => category.id === id)},

  };
const { reviews } = require("../db/db");

exports.Query = 
{
    hello: (parent,args,context) => "Hi",

    //resolving the filtering option in Products schema.
    //{filter} arg: gives acess to check state on onSale field given the choosen product
    // avgRating ( ln21 - ln27 ) - 

    products:(parent,{filter},{products}) => 

    {
        let filteredProducts = products

        if(filter){
                const { onSale , avgRating} = filter
            if (onSale){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if ([1,2,3,4,5].includes(avgRating)) {
                console.log("inside");
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id) 
                        sumRating += review.rating;
                        numberOfReviews++;
                    });

                    const avgProductRating = sumRating/numberOfReviews;
                    console.log(sumRating, product.name);
           });   
         }
       }
     },
//based on the context/scope of this function, we are looking to return the productId based on the ID field for the table products. Then compairing the 

    product: (parent,{id},{products}) => {return  products.find((product) => product.id === id)},

    categories: (parent,args,{categories} ) => categories,

    //destructure JSON 
    category: (parent,{id},{categories})  => { return categories.find((category) => category.id === id)},

  };
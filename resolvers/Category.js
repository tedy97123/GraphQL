 
 // Relating Data example via products in each catagory

const { reviews, categories } = require("../db/db");

 
 exports.Category = {
    products:({id: categoryId}, {filter} , {products}) => {
       const categoryProducts =  products.filter((product) => product.categoryId === categoryId) 

       let filteredCategoryProducts = categoryProducts;

       if(filter){
        const {onSale, avgRating} = filter
        if (onSale){
            filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                return product.onSale
            })
        }
        //console.log("Average Ratings:" , avgRating)
        if([1,2,3,4,5].includes(avgRating)) {
            filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                let sumRating = 0;
                numberOfReviews=0;
                reviews.forEach((review) => {
                    if (review.productId === product.id){
                        sumRating += review.rating;
                        numberOfReviews++;
                    }
                    return sumRating, numberOfReviews;
                });
                 

                const avgProductRating = sumRating / numberOfReviews;
                console.log ("here:" , avgProductRating)
                console.log(sumRating, "|", numberOfReviews, "|" , product.name)
                return avgProductRating >= avgRating;

                 

                 
            })
        }
         

    }
    return filteredCategoryProducts
    },
    
};
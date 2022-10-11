const {v4} = require("uuid")

 
exports.Mutation = {
    // update db with  new category ! 
    addCategory: ( parent, {input}, {categories}) => {

    const {name} = input
        const newCategory = {
            id: v4(),
            name  
        }
    
        categories.push(newCategory);

        return newCategory
    },
 
    addProduct:(parent , {input},{products}) => {
        const { name , image, price , onSale, quantity , categoryId } = input;

        const newProduct = {
            id : v4() , name , image, price , onSale, quantity , categoryId 
        }

        products.push (newProduct);
        return newProduct
    },

    addReviews:(parent , {input},{reviews}) => {
        const { date, title , comment, rating , productId } = input;

        const newReview = {
            id : v4() , date , title, comment , rating , productId 
        }

        reviews.push (newReview);
        return newReview
    }
}
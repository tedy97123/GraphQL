 
 // Relating Data example via products in each catagory
 
 exports.Category = {
    products:({id: categoryId}, {filter} , {products}) => {
       const categoryProducts =  products.filter((product) => product.categoryId === categoryId) 

       let filteredCategoryProducts = categoryProducts;

       if(filter){
        if (filter.onSale === true){
            filteredCategoryProducts = filteredCategoryProducts.filter(product => {
                return product.onSale
            })
        }
    }
    return filteredCategoryProducts
    },
    
};
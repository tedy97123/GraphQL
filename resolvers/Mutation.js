const {v4} = require("uuid")


// CRUD 

exports.Mutation = {
    // update db with  new category ! 
    AddCategory: ( parent, {input}, {db}) => {

    const {name} = input
        const newCategory = {
            id: v4(),
            name  
        }
    
        db.categories.push(newCategory);

        return newCategory
    },
 
    AddProduct:(parent , {input},{db}) => {
        const { name , image, price , onSale, quantity , categoryId } = input;

        const newProduct = {
            id : v4() , name , image, price , onSale, quantity , categoryId 
        }

        db.products.push (newProduct);
        return newProduct
    },

    AddReviews:(parent , {input},{db}) => {
        const { date, title , comment, rating , productId } = input;

        const newReview = {
            id : v4() , date , title, comment , rating , productId 
        }

        db.reviews.push (newReview);
        return newReview
    },
/* Query -> 
mutation{
    addReviews(input: {
      date: "09-01-2022",
      title:"golden fork problem",
      comment:"this product was not worth the money",
      rating:3,
      productId:"041e751f-4a9d-4653-a377-55867b6651e3"
    }){
    title
    comment
    rating
    date
    
    
    }
  } */
    

//each element in products that has delete categoryId change id to null
DeleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id)
        return {
          ...product,
          categoryId: null,
        };
      else return product;
    });
    return true;
  },

  //cascading deletion method
  DeleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter((product) => product.id !== id);
    db.reviews = db.reviews.filter((review) => review.productId !== id);
    return true;
  },

  // just deletes review 
  DeleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter((review) => review.id !== id);
    return true;
  },
/*  Query 
 mutation { 
    deleteProduct(id:"c2af9adc-d0b8-4d44-871f-cef66f86f7f6"  )
  } */

  // update categtoy method
    UpdateCategory: (parent, { id, input }, { db }) => {
    const index = db.categories.findIndex(category => category.id === id);
    db.categories[index] = {
        ...db.categories[index],
        ...input,
    }
    return db.categories[index]
    },
    /* Query ->
    mutation { 
    UpdateCategory(id:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70" ,  input: {  name: "Kitchen and Bath"})
    { name}
        } */

    UpdateReview: (parent, { id, input }, { db }) => {
    const index = db.reviews.findIndex(review => review.id === id);
        if (index === -1) return null
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        }
        return db.reviews[index]
    },
    /* Query -> */
     
    UpdateProduct: (parent, { id, input }, { db }) => {
    const index = db.products.findIndex(product => product.id === id);
    if (index === -1) return null
    db.products[index] = {
        ...db.products[index],
        ...input,
    }
    return db.products[index]
  },

  /* Query -> 
  mutation{
  UpdateProduct(id:"53a0724c-a416-4cac-ae45-bfaedce1f147", input:{
    name:"Black Steel-Pot",
    price:42.44
    onSale: true
    image: "img-1"
    quantity: 22
    description:"Silver steel pot that is perfect for cooking"
    
  }){
    name
    price
    onSale
  }
}*/
};
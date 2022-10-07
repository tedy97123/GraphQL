
exports.Query = 
{
    hello: (parent,args,context) => "Hi",

    products:(parent,args,{products}) => products,
    //if product id is not null in product object then return the productid to ProductId (search based on ID)
    product: (parent,{id},{products}) => 
    {
        return  products.find((product) => product.id === id)
    },

    categories: (parent,args,{categories} ) => categories,

    //destructure JSON 
    category: (parent,{id},{categories})  => 
    {
        return categories.find((category) => category.id === id)
    },
  };
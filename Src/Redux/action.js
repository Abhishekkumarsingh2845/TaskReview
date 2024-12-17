export const  ADDTOCART = "ADDTOCART";
export const REMOVECART = "REMOVECART";


export const addcart = (product) => ({
    type : ADDTOCART,
    payload :  product,
});

export const removecart = (productID) => ({
    type : REMOVECART,
    payload : productID
});



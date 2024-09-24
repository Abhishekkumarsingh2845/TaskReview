export const  ADDTOCART = "ADDTOCART";
export const REMOVECART = "REMOVECART";


export const addcart = (item) => ({
    type : ADDTOCART,
    payload :  item,
});

export const removecart = (itemid) => ({
    type : REMOVECART,
    payload : itemid
});



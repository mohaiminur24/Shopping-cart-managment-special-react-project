// LocalStorage cart set items function
const setCartItemLocalstorage = (id) =>{
    const getitem = JSON.parse(localStorage.getItem('cartitems'));
    if(getitem){
        const findout = getitem.find(item => item.ID == id);
        if(findout){
            const filteritems = getitem.filter(item => item.ID != id);
            const newitems = JSON.stringify([...filteritems,{ID:findout.ID,Quantity:findout.Quantity+1}])
            localStorage.setItem('cartitems',newitems);
        }else{
            const newitems = JSON.stringify([...getitem,{ID:id,Quantity:1}])
            localStorage.setItem('cartitems',newitems);
        }   
    }else{
        const newitems = JSON.stringify([{ID:id,Quantity:1}]);
        localStorage.setItem("cartitems",newitems);
    };
};


// Get cart items from localStorage
const getcartproduct = (products) =>{
    const cartitems = JSON.parse(localStorage.getItem('cartitems'));
    if(cartitems){
        let productincart = [];
        cartitems.forEach(items => {
            products.forEach(product=>{
                if(items.ID == product.id){
                    product.Quantity = items.Quantity;
                    productincart.push(product);
                }
            })
        });

        return productincart;
    };
};

// Delete cart signle item from localStorage
const deletecartitem = id => {
    const cartitems = JSON.parse(localStorage.getItem('cartitems'));
    const filteritems = cartitems.filter(item=> item.ID != id);
    const itemsString = JSON.stringify(filteritems);
    localStorage.setItem('cartitems',itemsString);
};

// DecreaseQuantity from cart items
const DecreaseQuantity = id =>{
    const cartitems = JSON.parse(localStorage.getItem('cartitems'));
    const filteritems = cartitems.filter(item=> item.ID != id);
    const finditem = cartitems.find(item=> item.ID == id)
    if(finditem.Quantity >1){
        const newitems = [...filteritems,{ID:finditem.ID,Quantity:finditem.Quantity-1}]
        const newitemsstring = JSON.stringify(newitems);
        localStorage.setItem('cartitems',newitemsstring);
    }else{
        
        toast.error("You have only one item!")
        
    }
};


// Increase from cart items
const IncreaseQuantity = id =>{
    const cartitems = JSON.parse(localStorage.getItem('cartitems'));
    const filteritems = cartitems.filter(item=> item.ID != id);
    const finditem = cartitems.find(item=> item.ID == id);
    if(finditem.Quantity < 10){
        const newitems = [...filteritems,{ID:finditem.ID,Quantity:finditem.Quantity+1}]
        const newitemsstring = JSON.stringify(newitems);
        localStorage.setItem('cartitems',newitemsstring);
    }else{
        alert("you never buy more then 10 product");
    }
};


export  {setCartItemLocalstorage,getcartproduct,deletecartitem,DecreaseQuantity,IncreaseQuantity};
export let cart = JSON.parse(localStorage.getItem('cart'));

// if(!cart){
//     cart = [
//         {
//          productId: '9f8e7d6c-5b4a-3g2h-1i0j-k9l8m7n6o5p4',
//          quantity: 2,
//          deliveryOptionId: '1'
//         }, 
//         {
//          productId: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
//          quantity: 1,
//          deliveryOptionId: '2'
//         }];
        
// }



export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addtocart(productId){
    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1; 
    }
    else{
        cart.push({
            productId: productId,
            quantity: 1, 
            deliveryOptionId: '1'
        });
    }
    saveToStorage();
};




export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    
    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){

    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();

}
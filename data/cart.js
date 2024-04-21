export const cart = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
}
];
export function AddToCart(productId){

    let matchingItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
    matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
        productId:productId,
        quantity: 1
      });
    }  
  }
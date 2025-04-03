const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
console.log(cart)

function tong(cart){
    let lac=0;
    for(let i=0;i<cart.length;i++){
        lac += (cart[i].price  *  cart[i].quantity  )
    }
    return lac
}
console.log("tong gia la: "+tong(cart))


let sum=0;
cart.forEach(num=>{
    sum+=(num.price * num.quantity);
})



console.log("tong gia cua cart la: "+sum)
// Get existing cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select all Add to Cart buttons
const buttons = document.querySelectorAll(".cart-btn");

// Add click event
buttons.forEach(button => {

    button.addEventListener("click", function () {

        const product = {
            name: this.dataset.name,
            price: Number(this.dataset.price),
            image: this.dataset.image
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to cart!");
    });

});

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".wishlist-btn").forEach(button=>{

button.addEventListener("click",function(){

const item={

name:this.dataset.name,

price:Number(this.dataset.price),

image:this.dataset.image

};

wishlist.push(item);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert(item.name+" added to Wishlist ❤️");

});

});


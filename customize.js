// ===============================
// Shoe Data
// ===============================

const shoes = {

    Nike: {
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
        name: "Nike Air Max",
        price: "₹6,999"
    },

    Adidas: {
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900",
        name: "Adidas Ultraboost",
        price: "₹7,499"
    },

    Puma: {
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900",
        name: "Puma RS-X",
        price: "₹5,899"
    },

    Jordan: {
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900",
        name: "Jordan Retro",
        price: "₹8,999"
    },

    Reebok: {
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=900",
        name: "Reebok Classic",
        price: "₹5,499"
    }

};

// ===============================
// Change Brand
// ===============================

const brand = document.getElementById("brandSelect");
const shoeImage = document.getElementById("shoeImage");
const shoeName = document.getElementById("shoeName");
const shoePrice = document.getElementById("shoePrice");

brand.addEventListener("change", function(){

    let data = shoes[this.value];

    shoeImage.src = data.image;
    shoeName.innerHTML = data.name;
    shoePrice.innerHTML = data.price;

});

// ===============================
// Change Color
// ===============================

function changeColor(color){

    shoeImage.style.filter =
    "drop-shadow(0 0 25px " + color + ")";

}

// ===============================
// Buttons
// ===============================

document.querySelector(".preview-btn").onclick=function(){

    alert("✅ Preview Updated Successfully");

}

document.querySelector(".cart-btn").onclick=function(){

    alert("🛒 Sneaker Added To Cart");

}

document.querySelector(".buy-btn").onclick=function(){

    alert("🎉 Redirecting To Checkout");

    window.location.href="checkout.html";

}
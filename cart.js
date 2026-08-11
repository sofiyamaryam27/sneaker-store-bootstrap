let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

let total = 0;

// Empty Cart
if (cart.length === 0) {

    cartItems.innerHTML = `
        <div class="text-center py-5">
            <h3>Your Cart is Empty 🛒</h3>
            <p class="text-muted">Looks like you haven't added any sneakers yet.</p>

            <a href="shop.html" class="btn btn-primary mt-3">
                Shop Now
            </a>
        </div>
    `;

    document.querySelector(".text-end").style.display = "none";
}

else {

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p class="cart-price">
                    ₹${item.price}
                </p>

            </div>

            <button class="btn btn-danger"
            onclick="removeItem(${index})">

                Remove

            </button>

        </div>

        `;

    });

    totalPrice.innerHTML = total;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}
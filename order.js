let orders = JSON.parse(localStorage.getItem("cart")) || [];

const orderList = document.getElementById("orderList");

if(orders.length==0){

orderList.innerHTML="<h3 class='text-center'>No Orders Yet 😔</h3>";

}

orders.forEach(item=>{

orderList.innerHTML+=`

<div class="order-card">

<img src="${item.image}">

<div class="order-info">

<h4>${item.name}</h4>

<h5>₹${item.price}</h5>

<p class="status">
Delivered ✅
</p>

</div>

</div>

`;

});
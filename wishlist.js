let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlistItems");

if(wishlist.length === 0){

container.innerHTML = `
<div class="text-center">
<h3>No items in Wishlist ❤️</h3>
</div>
`;

}

wishlist.forEach((item,index)=>{

container.innerHTML += `

<div class="col-lg-3">

<div class="card">

<img src="${item.image}" class="card-img-top">

<div class="card-body text-center">

<h5>${item.name}</h5>

<h4 class="text-primary">
₹${item.price}
</h4>

<button class="btn btn-danger"
onclick="removeItem(${index})">

Remove

</button>

</div>

</div>

</div>

`;

});

function removeItem(index){

wishlist.splice(index,1);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

location.reload();

}
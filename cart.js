let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];

console.log(cart);

// read
function readCart(cart) {
    document.querySelector("#cart").innerHTML = "";

    cart.forEach((fruit, position) => {
        document.querySelector("#cart").innerHTML +=`
        <div class="card mb-3"">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${fruit.img}" class="img-fluid rounded-start" alt="...">
    </div>F1uffyDe5troyer/POS-project 
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${fruit.name}</h5>
        <p class="card-text">Price: R${fruit.price}</p>
        <input type="number" min=1 value=${fruit.qty}/>
        <p>R${parseInt(fruit.qty) * parseFloat(fruit.price)}</p>
        <button class="btn btn-danger" onclick="deleteCart(${position})">Remove item</button>
      </div>
    </div>
  </div>
</div>
        `;
    });
    
    document.querySelector("#cart").innerHTML +=`
    <h1>Your total is R${calculateTotal()}</h1>
`
}

readCart(cart);


// 
function deleteCart(position) {
    cart.splice(position, 1)
    localStorage.setItem("cart",JSON.stringify(cart));
    readCart(cart);

}


// update cart
function updateCart(position) {
let qty = document.querySelector(`#updateCartQty(${position}`), value;

cart[position] = { ...cart[position],qty};
localStorage.setItem("cart", JSON.stringify(cart));
readCart(cart);
}


// delete from cart
function deleteCart(position) {
  cart.splice(position, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  readCart(cart);
}


// total
function calculateTotal() {
  let total = 0;

  cart.forEach(fruit => {
    total = total + fruit.price * fruit.qty
  })

  return total.toFixed(2);
}
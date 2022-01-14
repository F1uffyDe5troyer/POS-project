
let fruit =[{
    name:"Watch Dogs: Legion",
    category:"RPG",
    price:"999.99",
    img:"https://i.postimg.cc/RhkwP1fh/Watch-Dogs-Legion.png"
  },
  {
    name:"Call Of Duty",
    category:"RPG",
    price:"999.99",
    img:"https://i.postimg.cc/9Mx4kP3V/COD-modern-warfare.webp"

  },
  {
    name:"Watch Dogs: Legion",
    category:"RPG",
    price:"999.99",
    img:"https://i.postimg.cc/9Mx4kP3V/COD-modern-warfare.webp"
  },  {
    name:"Watch Dogs: Legion",
    category:"RPG",
    price:"999.99",
    img:"https://i.postimg.cc/9Mx4kP3V/COD-modern-warfare.webp"
  },  {
    name:"Watch Dogs: Legion",
    category:"RPG",
    price:"999.99",
    img:"https://i.postimg.cc/9Mx4kP3V/COD-modern-warfare.webp"
  },
  ];

let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];


  
  fruit = JSON.parse(localStorage.getItem("fruit"))
  ? JSON.parse(localStorage.getItem("fruit"))
  :fruit;
  function readFruit(fruit){
     document.querySelector("#fruit").innerHTML = "";
  
     fruit.forEach((fruit,position) => {
     document.querySelector("#fruit").innerHTML +=`
  
      <div class="card" style="width: 18rem;">
      <img src="${fruit.img}" class="card-img-top">
      <div>
    <label class"form-label">Quantity:</label>
    <input type="number" min="1" value=1 id="addQty${position}">
</div>
      <div class="card-body">
      
  <div>
  ${fruit.name}
  </div>
  <div>
  ${fruit.category} 
  </div>
  <div>
  ${fruit.price}
  </div>
  
      <div class="content">
      <div  class="buttons">
      <button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#update-modal-${position}">Edit</button>
      <button  class="btn btn-danger" onclick="deleteFruit(${position})">Remove</button>
      <button  class="btn btn-danger" onclick="addToCart(${position})">Add to cart</button>

      </div>
      </div>
      </div>
    </div>
  
      <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">EDIT YOUR PURCHASE</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body1">
              <input type="text" id="update-input-${position}" value="${fruit.name} "/>
              <input type="text" id="update-input-price-${position}" value="${fruit.price} "/>
              <input type="text" id="update-input-img-${position}" value="${fruit.img} "/>
              <select name="catergory" id="update-input-catergory-${position}">
              <option value="fruit">fruit</option>
              <option value="vegetable">vegetable</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-light" data-bs-dismiss="modal" onclick="updateFruit(${position})">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  
     `;
     });
  }
  
  readFruit(fruit);
  function createFruit(){
      let newfruit = document.querySelector("#add").value;
      let catergory = document.querySelector("#catergory").value;
      let img =  document.querySelector("#img").value;
      let price = document.querySelector("#price").value;
  
      try{
          if(newfruit =="") throw "Please enter a fruit name..."
          fruit.forEach(individual =>{
              if(individual == newfruit)throw "That fruit name already exists..."
          })
  
  
          fruit.push({
              name:newfruit,
              catergory,
              img,
              price,
          });
         localStorage.setItem("fruit",JSON.stringify(fruit));
          readFruit(fruit);
      } catch(err){
          alert(err)
      }
  
  }
  
  function deleteFruit(position){
      fruit.splice(position, 1)
      localStorage.setItem("fruit",JSON.stringify (fruit));
      readFruit(fruit);
  }
  
  function updateFruit(position){
      let fruits =document.querySelector(`#update-input-${position}`).value;
      let catergory =document.querySelector(`#update-input-catergory-${position}`).value;
      let img =  document.querySelector(`#update-input-img-${position}`).value;
      let price = document.querySelector(`#update-input-price-${position}`).value;
  
      try{
          if(fruits ===""){
              throw new Error("please enter a fruit name")
          }
          fruit[position]={
              name:fruits,
              catergory,
              img,
              price,
          };
          localStorage.setItem("fruit",JSON.stringify (fruit));
          readFruit(fruit);
      }catch(error){
          alert(error)
      }
      }
  

// Add to cart
function addToCart(position){
  let qty = document.querySelector(`#addQty${position}`).value;
  let added = false

  cart.forEach(f => {
      if (f.name == fruit[position].name) {
      f.qty = parseInt(f.qty) + parseInt(qty)
      added = true
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  })

  if(!added) {
    cart.push({ ...fruit[position], qty});
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}




// js 
// function priceSort() {
//   let direction = document.querySelector("#priceSort").value;

//   let sortedProducts = products.sort((a, b) => a.price - b.price);

//   console.log(sortedProducts);

//   if (direction == "descending") sortedProducts.reverse();
//   readProducts(sortedProducts);
// }


// function sortName() {
//   let direction = document.querySelector("#sortName").value;

//   let sortedProducts = products.sort((a, b) => {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1;
//     }
//     if (a.title.toLowerCase() > b.title.toLowerCase()) {
//       return 1;
//     }
//     return 0;
//   });
//   if (direction == "descending") sortedProducts.reverse();
//   console.log(sortedProducts);
//   readProducts(products);
// }


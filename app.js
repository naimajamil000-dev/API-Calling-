const products = []

fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => products.push(...data))
    .catch(error => console.error('Error:', error));

console.log(products)

let container = document.querySelector("#main")

setTimeout(() => {
    for (let i = 0; i < products.length; i++) {
        console.log(products[i])
        let product = products[i]
        container.innerHTML += `<div class="card" style="width: 18rem;">
        
  <img src=${product?.images[0] || "images/burger.png"} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    
  </div>
</div>`

    }
}, 2000)
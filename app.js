const products = []
fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => products.push(...data.recipes))
    .catch(error => console.error('Error:', error));

console.log(products)


let container = document.querySelector("#main")

function showLoader(){
  let loader = document.querySelector(".loader")
  loader.style.display="block"
}
function hideLoader(){
  let loader = document.querySelector(".loader")
  loader.style.display="none"
}
showLoader()

setTimeout(() => {
  hideLoader()
  for (let i = 0; i < products.length; i++) {
      console.log(products[i])
      let product = products[i]
      container.innerHTML += `<div class="card" style="width: 18rem;">
      
<img src=${product.image} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${product.name}</h5>
  <p class="card-text">${product.instructions}</p>
  
</div>
</div>`

  }
}, 2000)

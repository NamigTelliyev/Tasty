const products=document.getElementById("products")

function getProduct(){
    products.innerHTML=""
    let heart=JSON.parse(localStorage.getItem("heart")) || []
    db=heart
    db.map((item, index) => {
        const box = document.createElement('div');
        box.className = 'col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 content';
        box.innerHTML = `<img src="${item.image}" alt="img">
                <h2>${item.title}</h2>
                <h3>${item.name}</h3>
                <p>${item.price} $</p>
                <div class="basket"><button class="btnRemove" onclick="remove(${index})">Remove</button>
                <div class="basket"><button class="btnBasket" onclick="basket(${id})">Basket</button>
                `;
        products.appendChild(box);
    });
}
getProduct()




function remove(index){
    let heart=JSON.parse(localStorage.getItem("heart")) || []
    heart.splice(index,1)
    localStorage.setItem("heart",JSON.stringify(heart))
    getProduct()
}

function basket(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
}

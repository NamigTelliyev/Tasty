const products=document.getElementById("products")

function getProduct(){
    products.innerHTML=""
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    db=cart
    db.map((item, index) => {
        const box = document.createElement('div');
        box.className = 'col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 content';
        box.innerHTML = `<img src="${item.image}" alt="img">
                <h2>${item.title}</h2>
                <h3>${item.name}</h3>
                <p>${item.price} $</p>
                <div class="basket"><button class="btnRemove" onclick="remove(${index})">Remove</button>
                <button class="btnWish" onclick="wishlist(${item.id})">add to wish</button>
                `;
        products.appendChild(box);
    });
}
getProduct()




function remove(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getProduct()
}

function wishlist(id) {
    let heart = JSON.parse(localStorage.getItem("heart")) || []
    heart.push(db.find(item => item.id == id))
    localStorage.setItem("heart", JSON.stringify(heart))
}




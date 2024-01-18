const form = document.getElementById("form");
const inputOne = document.getElementById("inpOne");
const inputTwo = document.getElementById("inpTwo");
const inputThree = document.getElementById("inpThree");
const inputFour = document.getElementById("inpFour");
const products = document.getElementById("products");
const formSrc = document.getElementById("srcForm");
const inpSrc = document.getElementById("srcInp");
api = "https://655c846525b76d9884fd70e4.mockapi.io/products";



function myForm(e) {
    e.preventDefault()
    api = "https://655c846525b76d9884fd70e4.mockapi.io/products"
    axios.post(api, {
        name: inputOne.value,
        title: inputTwo.value,
        price: inputThree.value,
        image: inputFour.value,
    })
        .then(res => {
            console.log(res);
            form.reset();
        })
}
form.addEventListener("submit", myForm)


function getProducts() {
    products.innerHTML = ''
    axios.get(api)
        .then(res => {
            const data = res.data;
            db = data;
            db.forEach(item => {
                const box = document.createElement("div");
                box.className = "col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 content";
                box.innerHTML = `
                            <img src="${item.image}" alt="img">
                            <h2>${item.title}</h2>
                            <h3>${item.name}</h3>
                            <p>${item.price} $</p>
                            <div class="basket">
                            <button class="btnBasket" onclick="deleteItem(${item.id})">Delete</button>
        `;
                products.appendChild(box);
            })
        })

}
getProducts()





function deleteItem(id) {
    axios.delete(`https://655c846525b76d9884fd70e4.mockapi.io/products/${id}`)
    .then(res => {
        getProduct()
    })
}












formSrc.addEventListener("submit", srcFunc)
function srcFunc(e) {
    e.preventDefault()
    products.innerHTML = ''
    axios.get("https://655c846525b76d9884fd70e4.mockapi.io/products")
        .then(res => {
            let data = res.data;
            let datas = data.filter((item) => item.title.toLowerCase().includes(inpSrc.value.toLowerCase()))
            datas.forEach(item => {
                const box = document.createElement('div');
                box.className = 'col content';
                box.innerHTML = `<img src="${item.image}" alt="img">
                    <h2>${item.title}</h2>
                    <h3>${item.name}</h3>
                    <p>${item.price} $</p>
                    <div class="basket">
                    <button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                    <button class="btnWish" onclick="wishlist(${item.id})">Add to Wish</button></div>
                `;
                products.appendChild(box);
            });

        })
}
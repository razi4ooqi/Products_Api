let name = localStorage.getItem('name');
document.getElementById("welcome").innerText = `Welcome ${name}`;

let card = document.getElementById("card");
let cart = document.getElementById("cart");

// data from api

async function getData(){
    const res = await fetch ('https://fakestoreapi.com/products');
    const data = await res.json();
    
    data.map((element) => {
        let img = document.createElement("img");
        let text = document.createElement("p");
        let title = document.createTextNode(element.title);
        let priceElement = document.createElement("p");
        let btn = document.createElement("button");
        let btnText = document.createTextNode("Add To Cart");
        let priceText = document.createTextNode(`Price: $${element.price}`);
        img.setAttribute("src" , element.image);
        img.setAttribute("class" , "product_img");
        text.appendChild(title);
        priceElement.appendChild(priceText);
        card.appendChild(img);
        btn.appendChild(btnText);
        card.appendChild(text);
        card.appendChild(btn);
        card.appendChild(priceElement);

        function addToCart(img, price){
            let cartImg = document.createElement("img");
            let cartTrashBtn = document.createElement("i");
            cartTrashBtn.setAttribute("class" ,"fa-solid fa-trash");
            cartImg.setAttribute("src", img);
            cartImg.setAttribute("class", "cart_img");
            let cartPrice = document.createElement("p");
            let cartPriceText = document.createTextNode(price);
            cartPrice.appendChild(cartPriceText);

            cart.appendChild(cartImg);
            cart.appendChild(cartPrice);
            cart.appendChild(cartTrashBtn);
        }

        btn.addEventListener("click", () => addToCart(element.image, element.price))
    });

    
}

getData();
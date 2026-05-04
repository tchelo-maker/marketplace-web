//função do carrinho de compras!
let cart = [];
let total = 0;

function addToCart(name, price){
    cart.push({name, price});
    total += price;
    renderCart();
    toggleCart(true);
}

function renderCart(){
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    cart.forEach(item=>{
        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - R$ ${item.price}
            </div>
        `;
    });
    document.getElementById("total").innerText = "Total: R$ " + total;
}

function toggleCart(forceOpen=false){
    const cartElement = document.getElementById("cart");
    if(forceOpen){
        cartElement.classList.add("active");
    }else{
        cartElement.classList.toggle("active");
    }
}

function checkout(){
    if(cart.length === 0){
        alert("Seu carrinho está vazio.");
        return;
    }
    alert("Redirecionando para pagamento...");
    window.location.href = "https://www.mercadopago.com.br/";
}

function scrollToProdutos(){
    document.getElementById("produtos").scrollIntoView({behavior:"smooth"});
}

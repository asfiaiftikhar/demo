var openMenu = document.getElementsByClassName("openMenu")[0];
var closeMenu = document.getElementsByClassName("closeMenu")[0];
var mblMenu = document.getElementsByClassName("mblMenu")[0];

mblMenu.style.top = "-100%";

openMenu.addEventListener("click" , function(){
    mblMenu.style.top = "0%";
})

closeMenu.addEventListener("click" , function(){
    mblMenu.style.top = "-100%";
})


var cartMenu = document.getElementsByClassName("cartMenu")[0];
var cart = document.getElementsByClassName("cart")[0];
var CloseCart = document.getElementsByClassName("CloseCart")[0];

cartMenu.style.top = "-100%";

cart.addEventListener("click" , function(){
    cartMenu.style.top = "0%";
})

CloseCart.addEventListener("click" , function(){
    cartMenu.style.top = "-100%";
})
/* Animation barre de recherche */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    signUp.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* fin *************/

/* *******Animation du panier********* */
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    signUp.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* *******Fin********* */

/* *******Animation Formulire Login********* */
let loginForm = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    signUp.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

/* *******Fin********* */
/* *******Animation Formulire Login********* */
let signUp = document.querySelector('.sign-up');

document.querySelector('#sign-up').onclick = () =>{
    signUp.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

/* *******Fin********* */

/* Animation menu burger */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    signUp.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

/* Fin **/

/* Animation menu burger */
window.onscroll = () =>{
    searchForm.classList.remove('active');
    signUp.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* Fin **/

/* Slider Produits */

var swiper = new Swiper(".products_slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlider: true,
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
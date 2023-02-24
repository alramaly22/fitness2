let menu =document.querySelector('#menu-btn')
let navbar = document.querySelector(".navbar");
 menu.onclick = () =>{
    menu.classList.toggle("fat-times");
    navbar.classList.toggle("active");
}

// for window scroll
window.onscroll = () => {
    menu.classList.remove("fat-times");
    navbar.classList.remove("active");
    if (window.scroll > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
   grabcursor:true,
   loop:true,
   centereslides:true,
   autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  });
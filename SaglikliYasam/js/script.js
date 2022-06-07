$(function(){
//Responsive menu
  $("#btn").click(function(){
      $("#topnav").toggleClass("responsTopnav");
      $("#menus").toggleClass("responsMenu");
      $("#ul").toggleClass("responsUl");

  });
});

//Responsive menu button

const menuBtn3 = document.querySelector('.menu-button3');
let menuOpen3 = false;
menuBtn3.addEventListener('click', () => {
  if(!menuOpen3) {
    menuBtn3.classList.add('open');
    menuOpen3 = true;
  } else {
    menuBtn3.classList.remove('open');
    menuOpen3 = false;
  }
});



 





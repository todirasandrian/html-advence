jQuery(document).ready(function() {
  jQuery('.js-full-select').select2();


  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  tippy('.tooltip-button', {
    content: 'cam asa ceva',
    trigger: 'click',
  });
});


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
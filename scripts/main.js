$(document).ready(function(){
  // $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  // if (this.hash !== "") {
  //   event.preventDefault();
  //   var hash = this.hash;
  //   $('html, body').animate({
  //     scrollTop: $(hash).offset().top
  //   }, 900, function(){
  //     window.location.hash = hash;
  //     });
  //   } 
  // });
 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


});
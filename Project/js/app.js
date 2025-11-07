$(document).ready(function(){
//hero-slider
$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    smartSpeed:1000,
    dots:false,
    responsive:{
        0:{
            nav: false,
        }, 
        768:{
            nav: true,
        }                                                              
    }
});
    //PROJECT SLIDER
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    smartSpeed:1000,
    dots:false,
    margin:24,
    responsive:{
        0:{
           
        }, 
        768:{
        },
        1140:{
          items:2,
          center:true,
        }                                                           
    }
  })
});
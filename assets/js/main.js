
  //preloader//
  var loader = document.getElementById("preloader");

  window.addEventListener("load", function(){
    loader.style.display = "none";
  })
//type.js

  var typed = new Typed('.animate', {
    strings: [
       "LP sojib","a Designer","a Developer"," a Photographer"
        ],
     typeSpeed: 50,
     backSpeed: 3,
     loop: true,
  });

//type.js for mobile-banner
  var typed = new Typed('.wlc', {
    strings: [
       "Welcome To My Portfolio"
        ],
     typeSpeed: 50,
     backSpeed: 3,
     loop: false,
  });

//progress-bar for html
$(document).ready(function() {

  var progress = $('.progressbar .progress')

  function counterInit( fValue, lValue ) {

    var counter_value = parseInt( $('.counter').text() );
    counter_value++;

    if( counter_value >= fValue && counter_value <= lValue ) {

      $('.counter').text( counter_value + '%' );
      progress.css({ 'width': counter_value + '%' });

      setTimeout( function() {
        counterInit( fValue, lValue );
      }, 50 );


    }

  }

  counterInit( 0, 90 );

});

//progress-bar for css
$(document).ready(function() {

 var progress = $('.progressbar-2 .progress-2')

 function counterInit( fValue, lValue ) {

   var counter_value = parseInt( $('.counter-css').text() );
   counter_value++;

   if( counter_value >= fValue && counter_value <= lValue ) {

     $('.counter-css').text( counter_value + '%' );
     progress.css({ 'width': counter_value + '%' });

     setTimeout( function() {
       counterInit( fValue, lValue );
     }, 50 );


   }

 }

 counterInit( 0, 79 );

});

//progress-bar for js
$(document).ready(function() {

 var progress = $('.progressbar-3 .progress-3')

 function counterInit( fValue, lValue ) {

   var counter_value = parseInt( $('.counter-js').text() );
   counter_value++;

   if( counter_value >= fValue && counter_value <= lValue ) {

     $('.counter-js').text( counter_value + '%' );
     progress.css({ 'width': counter_value + '%' });

     setTimeout( function() {
       counterInit( fValue, lValue );
     }, 50 );


   }

 }

 counterInit( 0, 50 );

});

//progress-bar for wp
$(document).ready(function() {

 var progress = $('.progressbar-4 .progress-4')

 function counterInit( fValue, lValue ) {

   var counter_value = parseInt( $('.counter-wp').text() );
   counter_value++;

   if( counter_value >= fValue && counter_value <= lValue ) {

     $('.counter-wp').text( counter_value + '%' );
     progress.css({ 'width': counter_value + '%' });

     setTimeout( function() {
       counterInit( fValue, lValue );
     }, 50 );


   }

  }

  counterInit( 0, 70 );

});

  // portfolio-gallary
  $(function(){
    $(".grid").masonry({ itemSelector: ".grid-item" });
    
    $(".filtering").on("click", "span", function () {
        var a = $(".gallery").isotope({});
        var e = $(this).attr("data-filter");
        a.isotope({ filter: e });
    });
    $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
 })


  
 

 var myVideo = document.getElementById("video1"); 

 function playPause() { 
   if (myVideo.paused) 
     myVideo.play(); 
   else 
     myVideo.pause(); 
 }
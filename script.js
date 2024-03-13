'use strict';

/*preload*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function() {
	preloader.classList.add("loaded");
	document.body.classList.add("loaded");
});

/*Carousel*/
$(document).ready(function(){
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
      var currentIndex = $('div.active').index();
      $('ol.carousel-indicators li').removeClass('active');
      $('ol.carousel-indicators li[data-slide-to="' + currentIndex + '"]').addClass('active');
    });
  });
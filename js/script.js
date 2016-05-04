//mousewheel horizontal scroll
$(function() {
    $("html, body, *").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 100);
        this.scrollRight -= (delta * 100);
        event.preventDefault();
    });
});



//section smooth scrolling
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 300);
//         return false;
//       }
//     }
//   });
// });



//shrink navbar
$(window).scroll(function() {
  if ($(document).scrollLeft() > 300) {
    $('.nav').addClass('shrink');
  } else {
    $('.nav').removeClass('shrink');
  }
});
$(window).scroll(function() {
  if ($(document).scrollLeft() > 10) {
    $('.bg-image').addClass('shrink');
  } else {
    $('.bg-image').removeClass('shrink');
  }
});



//highlight current section
var sections = [];
sections.push($("#home"), $("#skills"), $("#portfolio"), $("#contact"));

var activeSectionIndex = 0;

var menuItems = [];
menuItems = $(".nav a");

$(window).on('DOMContentLoaded load resize scroll', function() {
  $.each(menuItems, function(i, item) {
    if (item.classList) {
      item.classList.remove("active")
    }
  });

  var scroll = $(window).scrollLeft();
  var vw = $("#skills")[0].clientWidth / 100

  for (var i=0; i<sections.length; i++) { 

    var sectionLeft = sections[i].offset().left; 
    var sectionRight = sectionLeft+sections[i].outerWidth();

    if( (scroll >= sectionLeft-400) && (scroll <= sectionRight-398)) { //100, 98 - margines
      menuItems[i].setAttribute("class", "active");
      activeSectionIndex = i;
      break;
    }
  }
}); 
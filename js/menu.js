var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.mobmenu').animate({
     right: "0px"
    }, 200);

    $('body').animate({
     right: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.mobmenu').animate({
     right: "-285px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};


$(document).ready(main);
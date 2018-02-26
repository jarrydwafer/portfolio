// JAVASCRIPT

//
//
// Let's get it started
$(document).ready(function() {
  window.setTimeout(function() {
    $('body').addClass('comeatmebruh');
  }, 200);

  //
  //
  // Contact Module

  var $menuWrap = $('#contact-menu-wrap'),
  		$body = $('body'),
  		$close = $('#close'),
  		$menuLink = $('.contact-page-link');

  function showOverlay() {
    $body.addClass('menu-on');
    $menuWrap.addClass('visible').addClass('opacity');
    setTimeout(function() {
      $close.addClass('on');
    }, 200);
  }

  function hideOverlay() {
    $body.removeClass('menu-on');
    $menuWrap.removeClass('opacity');
    setTimeout(function() {
      $close.removeClass('on');
      $menuWrap.removeClass('visible');
    }, 350);
  }

  $menuLink.on('click', function(e) {
    e.preventDefault();
    showOverlay();
  });

  $close.on('click', function(e) {
    e.preventDefault();
    hideOverlay();
  });

});

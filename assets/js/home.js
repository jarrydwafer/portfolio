// TYPEKIT
(function(d) {
  var config = {
    kitId: 'dxg3qwb',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

//
//
// Home scroll actions
$(document).ready(function() {
    $('.backtointro').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 1700);
    });
		$('.nav-list-about').click(function() {
			$('html, body').animate({ scrollTop: $('.design-philosophy').offset().top }, 1700);
		});
		$('.nav-list-deck').click(function() {
      $('.design-philosophy').css({ 'max-height': 0 });
      $('.ux-toolset').removeClass('open');
      $('.case-studies').toggleClass('open');
			$('html, body').animate({ scrollTop: $('.case-studies').offset().top }, 1700);
		});
    $('.case-studies-section-title').on('click', function() {
      $('.case-studies').toggleClass('open');
      $('html, body').animate({ scrollTop: $(this).offset().top }, 1200);
    });
});

// Home main image
$(window).on('scroll', function() {
  var hero = $('.home-full-width-graphic-window');
  var height = hero.outerHeight();
  var scrollTop = $(this).scrollTop();
  var rangeOffset = 100;
  var calc = 1 - scrollTop / (height - rangeOffset);

  hero.css({ 'opacity': calc });

  if ( calc > '1' ) {
    hero.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    hero.css({ 'opacity': 0 });
  }

  // Parralax for home image - should clean up function
  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.1;

  [].slice.call(parallax).forEach(function(el,i){

    var windowYOffset = window.pageYOffset,
        elBackgrounPos = "50% " + (80 - (windowYOffset * speed)) + "px";

    el.style.backgroundPosition = elBackgrounPos;

  });
});

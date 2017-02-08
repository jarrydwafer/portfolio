// Home content toggles
$(document).ready(function() {
  $('.toolset-ux-methodologies').on('click', function() {
    $('.toolset-ux-methodologies-content').toggleClass('open');
  });
  $('.toolset-design-and-dev').on('click', function() {
    $('.toolset-design-and-dev-content').toggleClass('open');
  });
  $('.toolset-essential-software').on('click', function() {
    $('.toolset-essential-software-content').toggleClass('open');
  });
});

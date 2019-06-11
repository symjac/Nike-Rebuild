$(document).ready(function() {


var $links = $('.bottom-nav-links .nav-link');
var $allDropdowns = $('.dropdown');

/*when mouse enter a main link, grab that link, find its index,
find the dropdown with the same index, add Show to that dropdown
*/
$links.on('mouseenter', function () {
  var $link = $(this);
  var index = $link.index();
  var $dropdown = $('.dropdown').eq(index);
  $dropdown.addClass('show');
  console.log('mouse enter');
});

/*when mouse leaves a main link, grab that link, find its index,
find the dropdown with the same index, remove Show from that dropdown
*/
$links.on('mouseleave', function () {
  var $link = $(this);
  var index = $link.index();
  var $dropdown = $('.dropdown').eq(index);
  $dropdown.removeClass('show');
  console.log('mouse leave');
});

/*when mouse enters one of the dropdowns (any of the dropdowns)
add Show to that dropdown so it stays Shown when mouse enters*/
$allDropdowns.on ('mouseenter', function () {
  $(this).addClass('show');
  console.log('dropdown mouse enter');
})

/*when mouse leaves one of the dropdowns (any of the dropdowns)
remove Show from that dropdown so it hides  when mouse leaves*/
$allDropdowns.on ('mouseleave', function () {
  $(this).removeClass('show');
  console.log('dropdown mouse leave');
})


});
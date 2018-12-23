console.log('test');
var	$window = $(window),
  $header = $('#header'),
  $heading = $('#heading');
  
if($heading.length > 0) {

  $window.on('resize', function() { $window.trigger('scroll'); });

  $heading.scrollex({
    bottom:		$header.outerHeight(),
    terminate:	function() { $header.removeClass('alt'); },
    enter:		function() { $header.addClass('alt'); },
    leave:		function() { $header.removeClass('alt'); }
  });
}
window.scrollTo(0, 0);

window.addEventListener("unload", function(event) {
  if ( window.location.pathname && window.location.pathname.includes('project')) {
    window.location.href = "https://frendon001.github.io/react-portfolio/";
  }
 });
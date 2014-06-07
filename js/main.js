//Snap to each pages
var FAST_SCROLL = 600;

// $('.nav-content').click(navClicked);
// function navClicked() {
// 	event.preventDefault();
// 	console.log('navClicked');
// 	var targetId = $(this).data('target-id');
// 	var targetY = $(targetId).offset().top;
// 	$('body').animate({scrollTop: targetY}, FAST_SCROLL);	
// }
$('.one').click(oneClicked);
function oneClicked() {
	event.preventDefault();
	var targetY = $('.team').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);	
}

$('.two').click(twoClicked);
function twoClicked() {
	event.preventDefault();
	var targetY = $('.services').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);	
}
$('.three').click(threeClicked);
function threeClicked() {
	event.preventDefault();
	var targetY = $('.contact').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);	
}

//ScrollTop - home
$('.home').click(homeClicked);
function homeClicked() {
	event.preventDefault();
	$('body').animate({scrollTop: 0}, FAST_SCROLL);
}

// Toggle Tabs
 $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });
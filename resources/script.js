$(document).ready(function() {

$(".simpleNav a").click(function(event) {
	event.preventDefault();

	//Set Necessary variables 
	var currentSlide = $(this).attr("href");
	var currentUnder_id = "#" + $(this).data("target");
	var curUnder = $(currentUnder_id);
	var curUnder_wrapper = curUnder.parent();

	$(this).addClass("current");
	$(this).siblings().removeClass("current");

	$(currentSlide).addClass('active');
	$(".content").not(currentSlide).removeClass('active');

	// $(curUnder_wrapper).css("background-color", "white");
	$(curUnder_wrapper).addClass('active');
	// $('.underneath li').not(curUnder_wrapper).css("background-color", "#5230C1");
	$('.underneath li').not(curUnder_wrapper).removeClass('active');
})



var $navTabs = $('.simpleNav a');
var $divUnderneath = $('.underneath li div');
var $underneathWrapper = $('.underneath li');


// $this.index() get's the index of the element currently 
// selected or focused on in an array
var toggleClass = function() {
	$divUnderneath.eq( $(this).index() ).toggleClass('active');
}
$navTabs.hover(toggleClass);

//original implementation
//	 $navTabs.each(function(index) {
//	 	$(this).hover(function() {
//	 		console.log( $divUnderneath.eq(index) );
//	 		$divUnderneath.eq(index).addClass('active');
//	 	}, function() {
//	 		$divUnderneath.eq(index).removeClass('active');
//	 	})
//	 });

});//end of initial (document).ready() function
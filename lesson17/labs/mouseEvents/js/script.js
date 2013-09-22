/**
 * Welcome to Mouse Events Exercise
 * A couple of thing we want to do:
 * 
 * 1) When a user clicks the mousebox, turn it red by adding the "clicked" css class 
 *    to it. When the user clicks it again, remove the "clicked" class and turn it blue 
 *    again.
 *
 * 2) Use the mousemove() event to show the current position of the mouse using the HTML snippet provided
 */

console.log(123);

$('#mouseBox').click(function(event){
  $(this).toggleClass('clicked');
});

$('#mouseBox').mousemove(function(event){
	// console.log(event.pageX);
	// console.log(event.pageY);
	$('#xLocation').text(event.pageX);
	$('#yLocation').text(event.pageY);


});

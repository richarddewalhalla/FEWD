$(document).ready(function(){
	var FavouriteColour = prompt("What is your favourite colour?");
	console.log(FavouriteColour);
	
	if(FavouriteColour = 'blue') {
		$('body').css('background-color', FavouriteColour);
	} else if(FavouriteColour = 'red') {
		$('body').css('background-color', FavouriteColour);
	}
});

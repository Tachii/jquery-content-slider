/**
 * @author Gleb Zaveruha
 */
$(document).ready(function(){
	//Options
	var speed = 500; 				//Fade speed
	var autoswitch = true; 			//Autoslider option
	var autoswitch_speed = 4000; 	//Auto Slider Speed

	//Add Initial Active Class
	$('.slide').first().addClass('active');
	
	//Hide All Slides
	$('.slide').hide();
	
	//Show First Slide
	$('.active').show();
	
	//Navigation buttons
	$('#index').on('click', function(){
		alert('test');
	});
});
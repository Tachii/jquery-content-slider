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
	$('#next').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive');
		
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active'); 
		} else {
			$('.oldActive').next().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		
	});
});
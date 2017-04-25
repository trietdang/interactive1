$(document).ready(function(){
	// add .draggable to any element you want to enable dragging on
	$('.drag').draggable();

	$('.right').each(function(){
		$height = $('window').height();
		$right = Math.floor(Math.random()*255);
		$top = Math.floor(Math.random()*$height);
		$(this).css('top',$top);
		$(this).css('right',$right);
	
	});

	$( "#draggable" ).draggable();

	$( "#draggable2").draggable();

	$('.left').each(function(){

			$height = $('window').height();
			$left = Math.floor(Math.random()*255);
			$top = Math.floor(Math.random()*255);
			$(this).css('top',$top);
			$(this).css('left',$left);

		});
});



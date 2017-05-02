$(document).ready(function(){

var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}

$('#turnoff').click(function(){
	$('#videoElement').fadeOut();
});

$('#turnon').click(function(){
	$('#videoElement').fadeIn();
});

	
	// add .draggable to any element you want to enable dragging on
	$('.drag').draggable();
	$('.resize').resizable();

	$('.right img').each(function(){
		$height = $(window).height();
		$right = Math.floor(Math.random()*255);
		$top = Math.floor(Math.random()*$height);
		$(this).css('top',$top);
		$(this).css('right',$right);
	
	});

	$( "#draggable" ).draggable();

	$( "#draggable2").draggable();

	$('.left img').each(function(){

			$height = $(window).height();
			$left = Math.floor(Math.random()*255);
			$top = Math.floor(Math.random()*$height);
			$(this).css('top',$top);
			$(this).css('left',$left);

		});

	
});



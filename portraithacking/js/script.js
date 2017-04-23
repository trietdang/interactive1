$(document).ready(function(){
	// your code here

	// alert('hi');

	var n = 1;


	$('#content').click(function(){

		var redValue = Math.floor(Math.random()+255);
		var blueValue = Math.floor(Math.random()+255);

		$('#content').html('coding');

		$('#content').html('I am suffering');
		$('#content').css('color', 'rgb('+redValue+','+blueValue+','+n+')');
		$('#body').css('background-color', 'rgb('+redValue+','+blueValue+','+n+')');

		alert (n)

		n = n + 10;

	});



		
	// n = 0;
	// $('body').click(function(){
	// 	n = n + 1;	
	// 	$('#pass').css('opacity', n/20);
	// });

	// $('body').mousemove(function(e){
	// 	$('#pass').css('opacity', + (e.pageY) / 10000);
	// });
	

});
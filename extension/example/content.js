// // replace images when the page loads
// $('img').attr('src', 'https://i.imgur.com/8QMMdNv.jpg');
// $('img').hide();

// replace text in the page when it loads
// $('body').children().each(function () {
// 	// replace the '@' sign with a '$' sign
// 	$(this).html( $(this).html().replace(/@/g,'$') );
// });

// // when you click on an image hide it using CSS
// $('img').click(function() {
// 	$(this).addClass('hide');
// });

// // when you click on the page 'body' apply .gradient to it from the CSS
// $('body').click(function() {
// 	$(this).addClass('gradient');
// });

n = 1;
$('.sidebar-ad-content').each(function(){
	$(this).append('<div class="fake-ui-'+n+'"><img src="img/ads.JPG" />this is chris</div>');
	n++;
});

// n = 1;
// $('.sidebar-ad-content').each(function(){
// 	$(this).append('<div class="fake-ui-'+n+'">this is chris</div>');
// 	n++;
// });

$('.stage').click(function() {
	$(this).addClass('hide');
});


// m = 1;
// $('.sponsored_post').each(function(){
// 	$(this).append('<div class="fake-sponsor-'+n+'">this is chris</div>');
// 	m++;
// });











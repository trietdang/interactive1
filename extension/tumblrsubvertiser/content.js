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
	$(this).append('<div class="fake-ui-'+n+'"><img src="https://trietdang.github.io/interactive1/extension/tumblrsubvertiser/img/2.jpg" />Ads Subvertiser</div>');
	n++;
});



$('.standalone-ad-container').css('background', 'red');

$('.sponsored_post').css('background', 'blue');

$('.stage').click(function() {
	$(this).addClass('hide');
});


$('.post_info_fence').click(function() {
	$(this).addClass('hide');
});

$('.video-ad').click(function() {
	$(this).addClass('hide');
});

$('.post_header').click(function() {
	$(this).addClass('hide');
});



$('.wb-container-top').click(function() {
	$(this).addClass('hide');
});

$('.dockable_video_embed').click(function() {
	$(this).addClass('hide');
});




$('.carousel-item-container').css('background', 'red');

// m = 1;
// $('.sponsored_post').each(function(){
// 	$(this).append('<div class="fake-sponsor-'+n+'">this is chris</div>');
// 	m++;
// });











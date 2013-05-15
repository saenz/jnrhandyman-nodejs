$(function() {
    $('.video').click(function() {
        $('.video .iframe').append('<iframe width="405" height="230" type="text/html" src="http://www.youtube.com/embed/U6v2ywBsF_Q?fs=1&autoplay=1&loop=1&version=3&autohide=1&showinfo=0" frameborder="0" allowfullscreen></iframe>');
        $('.video .iframe').fadeIn(700);
        $('.video img').fadeOut(700);
    });
})


// project carousel 
$(document).ready(function() {
	$('#myCarousel').carousel();
});
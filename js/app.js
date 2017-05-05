console.log("hooked up")

$('.parallax-window').parallax();

	$('#nav').affix({
		offset: {
			top: $('.jumbotron').height() && $('.header').height()
		}
	});
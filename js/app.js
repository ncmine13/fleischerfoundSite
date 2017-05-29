console.log("hooked up")

$('.parallax-window').parallax();

$('#nav').affix({
	offset: {
		top: $('.jumbotron').height() && $('.header').height()
	}
});


var minimized_elements = $('p.minimize');

minimized_elements.each(function(){    
    var text = $(this).text();        
    if(text.length < 100) return;
    
    $(this).html(
        text.slice(0,100)+'<span>... </span><a href="#" class="more">More</a>'+
        '<span style="display:none;">'+ text.slice(100,text.length)+' <a href="#" class="less">Less</a></span>'
    );
    
}); 


$('a.more', minimized_elements).click(function(event){
    event.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();         
});



$('a.less', minimized_elements).click(function(event){
    event.preventDefault();
    $(this).parent().hide().prev().show().prev().show();    
});

$("#myCarousel").carousel({interval:false});

$('#carousel-text').html($('#slide-content-0').html());

//Handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
    var id = this.id.substr(this.id.lastIndexOf("-") + 1);
    var id = parseInt(id);
    $('#myCarousel').carousel(id);
});


// When the carousel slides, auto update the text
$('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        console.log($('.item.active').data('slide-number'))
        var lol = $('#carousel-text').html($('#slide-content-'+id).html());
        console.log(lol)
});


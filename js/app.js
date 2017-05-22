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


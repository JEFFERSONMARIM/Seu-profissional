$(function(){
  
    var delay = 3000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.mini-img-wraper').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;

        $('.mini-img-wraper').css('width',sizeBoxSingle+'%');
        $('.nav-galeria-wraper').css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}
	}

    function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);			
		},delay)
	}

	function goToSlider(curIndex){

        var offSetX = $('.mini-img-wraper').eq(curIndex).offset().left - $('.nav-galeria-wraper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.slide-single').stop().animate({'scrollLeft':offSetX+'px'});
	}

	$(window).resize(function(){
		$('.slide-single').stop().animate({'scrollLeft':0});
	})


    // Clicar e ir para div de contato com base no atributo GOTO

	$('[goto=contato]').click(function(){
		$('nav a').css('color','black');
		$(this).css('color','#EB2D2D');
		$('html,body').animate({'scrollTop':$('#contato').offset().top});
		return false;
	})


	
    
})
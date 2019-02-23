
$(function(){

	var i=0;
	var h=0;

	var typo2=function(){
		var type=setInterval(function(){
			++h;
			if(h==9){
				clearInterval(type);
			}
			$('.lett'+h+'').removeClass('opa')
		}, 50)
	}

	setTimeout(function(){
		var typo=setInterval(function(){
			++i;
			if(i==16){
				clearInterval(typo);
			}
			$('.letter'+i+'').removeClass('opa')
		}, 50)
	}, 1800)

	setTimeout(function(){
		$('.line').removeClass('opa')
		$('.line').addClass('wide')
	}, 2700)

	var s2=function(){
		setTimeout(function(){
			$('.s2-heading').addClass('slide-in')			
		}, 1500)
		setTimeout(function(){
			$('.text1').addClass('slide-top')
		}, 1900)
	}

	var s3=function(){
		setTimeout(function(){
			typo2();		
		}, 1500)
		setTimeout(function(){
			$('.g-text1').addClass('slide-in2')			
		}, 2000)
	}

	var s4=function(){
		setTimeout(function(){
			$('.heading1').addClass('heading1-active')
		}, 1500)
		setTimeout(function(){
			$('.r-text1').addClass('r1-active')
		}, 1800)
		setTimeout(function(){
			$('.r-text2').addClass('r2-active')
		}, 2100)
		setTimeout(function(){
			$('.r-text3').addClass('r3-active')
		}, 2400)
		setTimeout(function(){
			$('.r-text4').addClass('r4-active')
		}, 2700)
		setTimeout(function(){
			$('.r-text5').addClass('r5-active')
		}, 3000)
	}

	var s5=function(){
		setTimeout(function(){
			$('.c1').addClass('c-active')
		}, 1500)
		setTimeout(function(){
			$('.c2').addClass('c-active')
		}, 1800)
		setTimeout(function(){
			$('.dot1').addClass('dot-active')
		}, 2000)
		setTimeout(function(){
			$('.dot2').addClass('dot-active')
		}, 2100)
		setTimeout(function(){
			$('.dot3').addClass('dot-active')
		}, 2200)
		setTimeout(function(){
			$('.creds').addClass('creds-active')
		}, 3000)
	}

	var scroller=function(b){
		console.log(b);
		if(b==0){
			$('html, body').animate({scrollTop: $('.screen1').offset().top}, 300)
			$('.circle-li').removeClass('li-active')
			$('.li-1').addClass('li-active')
		}
		else if(b==1){
			$('html, body').animate({scrollTop: $('.screen2').offset().top}, 300)
			$('.circle-li').removeClass('li-active')
			$('.li-2').addClass('li-active')
			s2();
		}
		else if(b==2){
			$('html, body').animate({scrollTop: $('.screen3').offset().top}, 300)
			$('.circle-li').removeClass('li-active')
			$('.li-3').addClass('li-active')
			s3();
		}
		else if(b==3){
			$('html, body').animate({scrollTop: $('.screen4').offset().top}, 300)
			$('.circle-li').removeClass('li-active')
			$('.li-4').addClass('li-active')
			s4();
		}
		else if(b==4){
			$('html, body').animate({scrollTop: $('.screen5').offset().top}, 300)
			$('.circle-li').removeClass('li-active')
			$('.li-5').addClass('li-active')
			s5();
		}	
	}

		var g=0;

	$(window).keydown(function(e){
		var x=e.keyCode;
		if(x==40){
			++g;
			if(g>4){
				g=4;
			}
			scroller(g);
			console.log('down');
		}
		else if(x==38){
			--g;
			if(g<0){
				g=0;
			}
			scroller(g);
			console.log('up');
		}
	})

	$('.auth').click(function(){
		window.open("https://dewanshrawat.me/")
	})

	var q=0;
	$('.submit').click(function(){
		var val=$('.email').val();
		for(var k=0; k<val.length, val[k]!='@'; k++){
			++q;
		}
		if(q!=val.length){
			console.log("dasdasd")
		}
	})
})

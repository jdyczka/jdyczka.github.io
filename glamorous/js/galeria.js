	function prev() {
		$('.prev').removeClass('prev');
		$('.current').removeClass('current');
		$('.next').removeClass('next');
		if(i==1){
			$(items[items.length-1]).addClass('prev');
			$(items[i-1]).addClass('current');
			$(items[i]).addClass('next');
		}
		if(i==0){
			$(items[items.length-2]).addClass('prev');
			$(items[items.length-1]).addClass('current');
			$(items[i]).addClass('next');
		}
		if(i==items.length-1){
			$(items[items.length-3]).addClass('prev');
			$(items[items.length-2]).addClass('current');
			$(items[items.length-1]).addClass('next');
		}
		else {
			$(items[i-2]).addClass('prev');
			$(items[i-1]).addClass('current');
			$(items[i]).addClass('next');
		}
		i=(i+items.length-1)%items.length;
	}

	function next() {
		$('.prev').removeClass('prev');
		$('.current').removeClass('current');
		$('.next').removeClass('next');
		if(i==items.length-2){
			$(items[i]).addClass('prev');
			$(items[i+1]).addClass('current');
			$(items[0]).addClass('next');
		}
		if(i==items.length-1){
			$(items[i]).addClass('prev');
			$(items[0]).addClass('current');
			$(items[1]).addClass('next');
		}
		if(i==0){
			$(items[0]).addClass('prev');
			$(items[1]).addClass('current');
			$(items[2]).addClass('next');
		}
		else {
			$(items[i]).addClass('prev');
			$(items[i+1]).addClass('current');
			$(items[i+2]).addClass('next');
		}
		i=(i+items.length+1)%items.length;
	}


//$(document).ready(function(){
	var items = $(".item");
	var i = 1;

	$('.item').click(function(ev){
		console.log(ev);
		if(ev.clientX<(window.innerWidth/2)){
			prev();	
		}
		else {
			next();
		}
	});
	$(document).keydown(function(ev) {
		switch(ev.keyCode){
			case 37: prev();	break;
			case 39: next();	break;
		}
	});


	//scrolling
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			    	var target = $(this.hash);
				    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				    if (target.length) {
				        $('html,body').animate({
				        	scrollTop: target.offset().top - 50
				        }, 1000);
				        return false;
		    	}
		    }
		});
	});



	// google maps
	var mapCanvas = $('.map')[0];
	var mapOptions = {
		center: new google.maps.LatLng(51.752525, 19.456429),
		zoom: 15,
		styles: [{
			"featureType":"all",
			"elementType":"all",
			"stylers":[
				{"saturation":-100},
				{"gamma":0.2}
			]
		}]
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.752525, 19.456429),
        map: map,
        icon: 'icon4.png',
        title: 'GLAMOROUS'
    });


	// flexible textarea
    $(document)
		.one('focus.textarea', '.autoExpand', function(){
			var savedValue = this.value;
			this.value = '';
			this.baseScrollHeight = this.scrollHeight;
			this.value = savedValue;
		})
		.on('input.textarea', '.autoExpand', function(){
			var minRows = this.getAttribute('data-min-rows')|0,
				 rows;
			this.rows = minRows;
        console.log(this.scrollHeight , this.baseScrollHeight);
			rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 20);
			this.rows = minRows + rows;
		});

//});
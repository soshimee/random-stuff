var lastScrollTop = 0;
$(window).scroll(function(event){
	var st = $(this).scrollTop();
	if (st > lastScrollTop){
		addRule("::-webkit-scrollbar-thumb", "background: linear-gradient(transparent, blue)");
		addRule("::-webkit-scrollbar-thumb:hover", "background: linear-gradient(transparent, red)");
		addRule("::-webkit-scrollbar-thumb:active", "background: linear-gradient(transparent, green)");
	} else {
		addRule("::-webkit-scrollbar-thumb", "background: linear-gradient(blue, transparent)");
		addRule("::-webkit-scrollbar-thumb:hover", "background: linear-gradient(red, transparent)");
		addRule("::-webkit-scrollbar-thumb:active", "background: linear-gradient(green, transparent)");
	}
	lastScrollTop = st;
});

setInterval(() => {
	addRule("::-webkit-scrollbar-thumb", "background: linear-gradient(transparent, blue, transparent)");
	addRule("::-webkit-scrollbar-thumb:hover", "background: linear-gradient(transparent, red, transparent)");
	addRule("::-webkit-scrollbar-thumb:active", "background: linear-gradient(transparent, green, transparent)");
}, 0);
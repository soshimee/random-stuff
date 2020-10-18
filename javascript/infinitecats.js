function verticalScrollPresent() {
	return (document.documentElement.scrollHeight !== document.documentElement.clientHeight);
}

function appendCat() {
	$(".cats").append("<img src=\"resources/infinitecats/loadingcat.jpg\" alt=\"Loading...\" class=\"cat__image loading\">");
	$(".cats").append("<br class=\"loading\">");
	$.getJSON("https://aws.random.cat/meow", data => {
		$(".cats").append(`<img src="${data.file}" alt="Another cat!" class="cat__image latest">`);
		$(".cats").append("<br>");
		$(".latest").hide();
		$(".latest").imagesLoaded(() => {
			$(".latest").show();
			$(".latest").removeClass("latest");
			$(".loading").remove();
		});
	});
}

function reqappendCat() {
	sb = $("body").height() - $(window).scrollTop();
	if (sb < $(window).height()+1000) {
		appendCat();
	}
}


var startInterval = setInterval(() => {
	if (verticalScrollPresent()) {
		clearInterval(startInterval);
	} else {
		appendCat();
	}
}, 100);

$(window).scroll(() => {
	reqappendCat();
});
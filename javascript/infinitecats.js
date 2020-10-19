var id = 0;

function appendCat(id) {
	$(".cats").append(`<div class="cat__image__container__${id}">`)
	$(`.cat__image__container__${id}`).append(`<img src="resources/infinitecats/loadingcat.jpg" alt="Loading..." class="cat__image loading__${id}">`);
	$.getJSON("https://aws.random.cat/meow", data => {
		$(`.cat__image__container__${id}`).append(`<img src="${data.file}" alt="Another cat!" class="cat__image cat__image__${id}">`);
		$(`.cat__image__${id}`).hide();
		$(`.cat__image__${id}`).imagesLoaded(() => {
			$(`.cat__image__${id}`).show();
			$(`.cat__image__${id}`).removeClass(`latest__${id}`);
			$(`.loading__${id}`).remove();
		});
	});
}

function reqappendCat() {
	sb = $("body").height() - $(window).scrollTop();
	if (sb < $(window).height()+1000) {
		appendCat(id);
		id++;
	}
}

var reqAppendCatInterval = setInterval(() => {
	reqappendCat();
}, 100);

var imageSizeInterval = setInterval(() => {
	if (innerWidth > innerHeight) {
		$(".style__portrait").remove();
		if (!$(".style__landscape").length) {
			$("head").append(`<style class="style__landscape">
				.cat__image {
					height: 50vh;
				}
			</style>`);
		}
	} else {
		$(".style__landscape").remove();
		if (!	$(".style__portrait").length) {
			$("head").append(`<style class="style__portrait">
				.cat__image {
					width: 50vw;
				}
			</style>`);
		}
	}
}, 100);
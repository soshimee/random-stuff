$.ajaxSetup({cache: false});
var id = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function appendCat(id) {
	$(".cats").append(`<div class="cat__image__container__${id}">`);
	$(`.cat__image__container__${id}`).append(`<img src="resources/infinitecats/images/loadingcat${getRandomInt(0, 2)}.jpg" alt="Loading..." class="cat__image loading__${id}">`);
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

function resizeImages() {
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
		if (!$(".style__portrait").length) {
			$("head").append(`<style class="style__portrait">
				.cat__image {
					width: 50vw;
				}
			</style>`);
		}
	}
}

for (let i = 0; i < 10; i++) {
	reqappendCat();
}
resizeImages();

onscroll = reqappendCat;
onresize = resizeImages;
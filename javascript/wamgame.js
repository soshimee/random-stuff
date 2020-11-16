$(".section").hide();
$(".menu").show();

function start() {
	var score = 0;
	var timeleft = $(".timelimit").val();

	for (i=0; i<$(".size__y").val(); i++) {
		$(".game__display").append("<tr class=\"game__display__row\"></tr>");
	}

	for (i=0; i<$(".size__x").val(); i++) {
		$(".game__display__row").append("<td class=\"game__display__col\"></td>");
	}

	$(".score").html(score);
	$(".timeleft").html(timeleft);

	var loop1 = setInterval(() => {
		var x = Math.floor(Math.random()*$(".size__x").val()*$(".size__y").val());
		$("td").css("background-color", "white");
		$("td").off("click");
		$("td").eq(x).css("background-color", "black");
		$("td").eq(x).click(() => {
			score++;
			$("td").off("click");
			$(".score").html(score);
			$('body').append('<embed id="embed_player" src="resources/wamgame/sfx/buttonclick.wav" autostart="true" hidden="true"></embed>');
		});
	}, $(".speed").val());

	var loop2 = setInterval(() => {
		timeleft--;
		$(".timeleft").html(timeleft);

		if (timeleft <= 0) {
			clearInterval(loop1);
			clearInterval(loop2);
			$(".section").hide();
			$(".gameover").show();
		}
	}, 1e3);

	$(".section").hide();
	$(".game").show();
}

$(".start__button").click(() => {
	start();
});

$(".menu__button").click(() => {
	$(".section").hide();
	$(".menu").show();
});

$(".settings__button").click(() => {
	$(".section").hide();
	$(".settings").show();
});

$(".reset__settings").click(() => {
	$(".timelimit").val("60");
	$(".speed").val("500");
	$(".size__x").val("3");
	$(".size__y").val("3");
});

$("button").click(() => {
	$("body").append("<embed class=\"buttonclick__sfx\" src=\"resources/wamgame/sfx/buttonclick.wav\" autostart=\"true\" hidden=\"true\"></embed>");
});
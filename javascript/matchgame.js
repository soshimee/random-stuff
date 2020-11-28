$(".section").hide();
$(".menu").show();

function start() {
	var score = 0;
	var timeleft = $(".timelimit").val();
	var sel = [];
	var active = -1;

	$(".game__display").html("");

	for (i=0; i<$(".size__y").val(); i++) {
		$(".game__display").append("<tr class=\"game__display__row\"></tr>");
	}

	for (i=0; i<$(".size__x").val(); i++) {
		$(".game__display__row").append("<td class=\"game__display__col\"></td>");
	}

	$(".score").html(score);
	$(".timeleft").html(timeleft);

	for (i=0; i<Math.floor($(".size__x").val()*$(".size__y")/2); i++) {
		for (j=0; j<2; j++) {
			var x = Math.floor(Math.random()*$(".size__x").val()*$(".size__y").val());
			while (sel.includes(x)) {
				x = Math.floor(Math.random()*$(".size__x").val()*$(".size__y").val());
			}
			sel += x;
			$(".game__display__col").eq(x).html(i);
			$(".game__display__col").eq(x).hide();
			$(".game__display__col").eq(x).click(() => {
				if (active == i) {
					score++;
					$(".game__display__col").eq(x).attr("found", "true");
					$(".game__display__col").eq(x).off("click");
					$(".game__display__col").eq(x).show();
					for (k=0; k<$(".size__x").val()*$(".size__y"); k++) {
						if ($(".game__display__col").eq(k).html() == i) {
							$(".game__display__col").eq(k).attr("found", "true");
							$(".game__display__col").eq(k).off("click");
							$(".game__display__col").eq(k).show();
						}
					}
					active = -1;
				} else if (active == -1) {
					active = i;
					$(".game__display__col").eq(x).show();
				} else {
					$(".game__display__col").not("[found]").eq(x).hide();
				}
			});
		}
	}

	var loop1 = setInterval(() => {
		timeleft--;
		$(".timeleft").html(timeleft);

		if (timeleft <= 0) {
			clearInterval(loop1);
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
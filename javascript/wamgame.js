$(".section").hide();
$(".menu").show();

function start() {
	var score = 0;
	var timeleft = $(".timelimit").val();

	$(".score").html(score);
	$(".timeleft").html(timeleft);

	var loop1 = setInterval(() => {
		var x = Math.floor(Math.random()*9);
		$("td").css("background-color", "white");
		$("td").off("click");
		$("td").eq(x).css("background-color", "black");
		$("td").eq(x).click(() => {
			score++;
			$("td").off("click");
			$(".score").html(score);
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
});
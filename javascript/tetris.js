$(".section").hide();
$(".start").show();

$(".start").click(() => {
	$(".section").hide();
	$(".game").show();

	$(".game__display").html("");
	for(i=0; i<20; i++) {
		$(".game__display").append("<tr class=\"row\"></tr>");
	}
	for(i=0; i<10; i++) {
		$(".row").append("<td class=\"col\"></td>");
	}
});
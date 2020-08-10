$("#square").css("animation", "square 4s infinite");

$("#back").click(() => {
	$("#square").css("animation", "square-reverse 4s infinite");
});

$("#normal").click(() => {
	$("#square").css("animation", "square 4s infinite");
});
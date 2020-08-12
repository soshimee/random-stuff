var color;
var rgbcolor;
var hslcolor;
setInterval(() => {
	color = $("#colorpicker").val();
	rgbcolor = w3color(color).red+", "+w3color(color).green+", "+w3color(color).blue;
	hslcolor = w3color(color).hue+", "+Math.round(w3color(color).sat*100)+"%, "+Math.round(w3color(color).lightness*100)+"%";

	$("#colorpicker").trigger("click");
	$("html").css("background-color", color);
	$(".hex").html(color);
	$(".rgb").html(rgbcolor);
	$(".hsl").html(hslcolor);
}, 1000);
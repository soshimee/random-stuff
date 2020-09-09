var isFloat = /(^\d+\.\d+$)|(^\d+$)/

$("#search").click(() => {
	var lng = $("#lngText").val();
	var lat = $("#latText").val();

	if (!isFloat.test(lng) || !isFloat.test(lat)) {
		alert("Enter a number.");
	} else {
		open(`https://google.com/maps/dir/${lng},${lat}`);
	}
});
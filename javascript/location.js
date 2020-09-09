function isFloat(str) {
	return /^-?\d+(\.\d+)?$/.test(str);
}

$("#search").click(() => {
	var lng = $("#lngText").val();
	var lat = $("#latText").val();

	if (!isFloat(lng) || !isFloat(lat)) {
		alert("Enter a number.");
	} else {
		open(`https://google.com/maps/dir/${lng},${lat}`);
	}
});
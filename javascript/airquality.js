// Seoul
$.getJSON("https://api.waqi.info/feed/seoul/?token=57c2c3a4f5e324473bfd71863c0ad333ed1002a5", (data) => {
	$("#seoul__pm25").html(data.data.iaqi.pm25.v);
	$("#seoul__h").html(data.data.iaqi.h.v);
	$("#seoul__t").html(data.data.iaqi.t.v);
	console.log(data);
});

// Okinawa
$.getJSON("https://api.waqi.info/feed/okinawa/?token=57c2c3a4f5e324473bfd71863c0ad333ed1002a5", (data) => {
	$("#okinawa__pm25").html(data.data.iaqi.pm25.v);
	$("#okinawa__h").html(data.data.iaqi.h.v);
	$("#okinawa__t").html(data.data.iaqi.t.v);
});

// Oakland
$.getJSON("https://api.waqi.info/feed/oakland/?token=57c2c3a4f5e324473bfd71863c0ad333ed1002a5", (data) => {
	$("#oakland__pm25").html(data.data.iaqi.pm25.v);
	$("#oakland__h").html(data.data.iaqi.h.v);
	$("#oakland__t").html(data.data.iaqi.t.v);
});

// Local
$.getJSON("https://api.waqi.info/feed/here/?token=57c2c3a4f5e324473bfd71863c0ad333ed1002a5", (data) => {
	$("#local__pm25").html(data.data.iaqi.pm25.v);
	$("#local__h").html(data.data.iaqi.h.v);
	$("#local__t").html(data.data.iaqi.t.v);
});
// Setup
$.ajaxSetup({cache: false});
$(".hider").hide();
$(".extraPortInfo").hide();
$(".log").hide();
$(".checking").hide();
$("body").show();

// Functions
var extraPortInfo;

function clearlog() {
	$(".log").text("Log: Log cleared.");
}

function logError() {
	$(".log").show();
	var errorLog = $("<p>Log: <span class='error'>Error: Could not get server status, check the server address.</span></p>");
	$(".logs").append(errorLog);
};

function logSuccess() {
	let address = $(".address").val();
	let svport = $(".port").val();
	var successLog;
	$(".log").show();
	if (!svport) {
		successLog = $(`<p>Log: <span class='success'>Success: Successfully checked server status for ${address}.</span></p>`);
	} else {
		successLog = $(`Log: <span class='success'>Success: Successfully checked server status for ${address}:${svport}.</span>`);
	}
	$(".logs").append(successLog);
};

function toggleExtraPortInfo() {
	extraPortInfo = !extraPortInfo;
}

$(".form").submit(e => {
	e.preventDefault();

	var timetaken = performance.now();

	$(".checking").show();
	$(".hider").hide();
	$(".address").attr("disabled", "disabled");
	$(".port").attr("disabled", "disabled");

	$.getJSON(`https://api.mcsrvstat.us/2/${$(".address").val()}${$(".port").val() ? `:${$(".port").val()}` : ""}`, data => {
		timetaken = performance.now() - timetaken;

		$(".checking").hide();
		$(".address").removeAttr("disabled");
		$(".port").removeAttr("disabled");
		if (data.online) {
			$(".favicon").attr("src", "");
			$(".favicon").attr("src", data.icon);
			$(".status").html("Online");
			$(".version").html(data.version);
			if (data.players.list) {
				$(".players").html(`${data.players.list.join()} (${data.players.list.length}/${data.players.max})`);
			} else if (data.players.online) {
				$(".players").html(`${data.players.online}/${data.players.max}`);
			} else {
				$(".players").html("None");
			}
			$(".players").html();
			$(".timetaken").html(timetaken/1e3);

			$(".hider").show();
			logSuccess();
		} else {
			$(".hider").hide();
			logError();
		}
	});
});
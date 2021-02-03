// Setup
$.ajaxSetup({cache: false});
$(".hider").hide();
$(".extraPortInfo").hide();
$(".log").hide();
$(".checking").hide();
$("body").show();

// Functions
let extraPortInfo = false;

function clearlog() {
	$(".logs").text("Log: Log cleared.");
}

function logError() {
	$(".log").show(1000);
	var errorLog = $("<p>Log: <span class='error'>Error: Could not get server status, check the server address.</span></p>");
	$(".logs").prepend(errorLog);
	errorLog.hide().show(1000);
};

function logSuccess() {
	let address = $(".address").val();
	let svport = $(".port").val();
	var successLog;
	$(".log").show(1000);
	if (!svport) {
		successLog = $(`<p>Log: <span class='success'>Success: Successfully checked server status for ${address}.</span></p>`);
	} else {
		successLog = $(`Log: <span class='success'>Success: Successfully checked server status for ${address}:${svport}.</span>`);
	}
	$(".logs").prepend(successLog);
	successLog.hide().show(1000);
};

function toggleExtraPortInfo() {
	extraPortInfo = !extraPortInfo;
	extraPortInfo ? $(".extraPortInfo").show(1000) : $(".extraPortInfo").hide(1000);
}

$(".form").submit(e => {
	e.preventDefault();

	var timetaken = performance.now();

	$(".checking").show(1000);
	$(".hider").hide(1000);
	$(".address").attr("disabled", "disabled");
	$(".port").attr("disabled", "disabled");
	$(".check").attr("disabled", "disabled");

	$.getJSON(`https://api.mcsrvstat.us/2/${$(".address").val()}${$(".port").val() ? `:${$(".port").val()}` : ""}`, data => {
		timetaken = performance.now() - timetaken;

		$(".checking").hide(1000);
		$(".address").removeAttr("disabled");
		$(".port").removeAttr("disabled");
		$(".check").removeAttr("disabled");
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
			$(".timetaken").html((timetaken/1e3).toFixed(2));

			$(".hider").show(1000);
			logSuccess();
		} else {
			$(".hider").hide(1000);
			logError();
		}
	});
});
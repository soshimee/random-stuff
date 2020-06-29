// Setup
$("#hider").hide();
$("#extraPortInfo").hide();
$(".log").hide();

// Functions
var extraPortInfo = false;

function clearlog() {
    $("#log").text("Log: Log cleared.");
}

function logError() {
    $(".log").show();
    var errorLog = $("<p>Log: <span class='error'>Error: Could not get server status, check the server address.</span></p>");
    $("#log").append(errorLog);
};

function logSuccess() {
    let address = $('#address').val();
    let svport = $('#port').val();
    var successLog;
    $(".log").show();
    if (svport == "") {
        successLog = $("<p>Log: <span class='success'>Success: Successfully checked server status for "+address+".</span></p>");
    } else {
        successLog = $("Log: <span class='success'>Success: Successfully checked server status for "+address+":"+svport+".</span>");
    }
    $("#log").append(successLog);
};

$(function () {
    $('#submit-form').on('submit', function(e) {
        e.preventDefault();     
        let address = $('#address').val();
        let svport = $('#port').val();

    MinecraftAPI.getServerStatus(address, {
        port: svport
    }, function(err, status) {
        if (err || !status.online) {
            $("#hider").hide();
            logError();
        }
        $('.status').text(status.online ? 'Online' : 'Offline');
        $('.version').text(status.server.name);
        $('.players').text(status.players.now+"/"+status.players.max);
        $('.duration').text(status.duration/1000000000);
        $('.motd').html(status.motd.replaceColorCodes());
        $('.favicon').attr("src", status.favicon);

        if (status.online) {
            logSuccess();
            $("#hider").show();
        }
    });
})});

function toggleExtraPortInfo() {
    if (!extraPortInfo) {
        $("#extraPortInfo").show();
        extraPortInfo = true;
    } else {
        $("#extraPortInfo").hide();
        extraPortInfo = false;
    }
}
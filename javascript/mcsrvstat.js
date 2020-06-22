// Setup
$("#hider").hide();
$("#extraPortInfo").hide();
$(".log").hide();

// Functions
var extraPortInfo = false;

function clearlog() {
    document.querySelector("#log").innerHTML = "Log: Log cleared.";
}

function logError() {
    $(".log").show();
    var errorLog = document.createElement("p");
    errorLog.innerHTML = "Log: <span class='error'>Error: Could not get server status, check the server address.</span>";
    document.querySelector("#log").appendChild(errorLog);
    return;
};

function logSuccess() {
    let address = document.getElementById('address').value;
    let svport = document.getElementById('port').value;
    $(".log").show();
    var successLog = document.createElement("p");
    if (svport == "") {
        successLog.innerHTML = "Log: <span class='success'>Success: Successfully checked server status for "+address+".</span>";
    } else {
        successLog.innerHTML = "Log: <span class='success'>Success: Successfully checked server status for "+address+":"+svport+".</span>";
    }
    document.querySelector("#log").appendChild(successLog);
    return;
};

$(function () {
    $('#submit-form').on('submit', function(e) {
        e.preventDefault();     
        let address = document.getElementById('address').value;
        let svport = document.getElementById('port').value;

    MinecraftAPI.getServerStatus(address, {
        port: svport
    }, function(err, status) {
        if (err) {
            $("#hider").hide();
            logError();
            return document.querySelector('.status').innerHTML = 'Error';
        }
        document.querySelector('.status').innerHTML = status.online ? 'Online' : 'Offline';
        document.querySelector('.version').innerHTML = status.server.name;
        document.querySelector('.players').innerHTML = status.players.now+"/"+status.players.max;
        document.querySelector('.duration').innerHTML = status.duration/1000000000;
        document.querySelector('.motd').innerHTML = "";
        document.querySelector('.motd').appendChild(status.motd.replaceColorCodes());
        document.querySelector('.favicon').src = status.favicon;

        if (status.online) {
            logSuccess();
            $("#hider").show();
            return;
        } else {
            $("#hider").hide();
            return;
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
var extraPortInfo = false;

function checkStatus(address, svport) {
    $("html").ready(function(){
        MinecraftAPI.getServerStatus(address, {
            port: svport
        }, function(err, status) {
            if (err) {
                return document.querySelector('.status').innerHTML = 'Error';
            }
            document.querySelector('.status').innerHTML = status.online ? 'Online' : 'Offline';
            document.querySelector('.version').innerHTML = status.server.name;
            document.querySelector('.players').innerHTML = status.players.now+"/"+status.players.max;
            document.querySelector('.duration').innerHTML = status.duration/1000000000;
            document.querySelector('.motd').innerHTML = status.motd;
            document.querySelector('.favicon').src = status.favicon;
            $("#hider").show();
        });
    });
}

function toggleExtraPortInfo() {
    if (!extraPortInfo) {
        $("#extraPortInfo").show();
        extraPortInfo = true;
    } else {
        $("#extraPortInfo").hide();
        extraPortInfo = false;
    }
}
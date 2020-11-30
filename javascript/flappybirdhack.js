if (location.protocol == "https:" && location.hostname == "random-stuff-soshimee.surge.sh") {
	location.protocol = "http:";
}

$(".hack").submit(e => {
	e.preventDefault();

	$.post("http://social.flappybird.io/leaderboard/",{s:$(".score").val(),t:0},function(o){open("http://flappybird.io/leaderboard/new/#"+o.token)},"json");
});
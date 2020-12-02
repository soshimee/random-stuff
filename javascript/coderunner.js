$(".library").hide();

$("textarea").on("keyup", () => {
	$("iframe").attr("srcdoc", `${$("textarea.html").val()}<style>${$("textarea.css").val()}</style><script>${$("textarea.javascript").val()}</script>`);
});
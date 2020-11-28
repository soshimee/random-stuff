setInterval(() => {
	$("iframe").attr("srcdoc", `${$("textarea.html").val()}<style>${$("textarea.css").val()}</style><script>${$("textarea.javascript").val()}</script>`);
}, 1e3);
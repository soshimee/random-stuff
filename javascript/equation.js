MathJax = {
	options: {
		renderActions: {
			addMenu: []
		}
	}
};

$("#equationText").on("input", () => {
	var equation = $("#equationText").val();
	if (!/(^\\+$)|(^.+\\$)|((^.*{.*(?!}).$)|(^.+?{$)|(^{$))|\\\)|^$/.test($("#equationText").val())) {
		if ($("#downloadableCheckbox").is(":checked")) {
			$(".rendered__equation").html("<img class=\"rendered__image\">")
			$(".rendered__image").attr("src", `https://latex.codecogs.com/svg.latex?\\inline&space;${equation}`)
		} else {
			$(".rendered__equation").html(`\\(${equation}\\)`);
			MathJax.typeset();
		}
	}
});
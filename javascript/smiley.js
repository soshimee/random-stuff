$("#form").submit((e) => {
	e.preventDefault();
	if (/^[:;][-~]?[\)D]$/.test($("#text").val())) {
		$("output").html("True");
	} else {
		$("output").html("False");
	}
});
$("#form").submit((e) => {
	e.preventDefault();
	(/^[:;][-~]?[\)D]$/.test($("#text").val())) ? $("output").html("True") : $("output").html("False");
});
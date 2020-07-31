// Setup
$("#hider").hide();

//Functions
$(() => {
    $('#submit-form').on('submit', (e) => {
        e.preventDefault();
        let keyword = $("#keyword").val();
        let engine = $(":input:radio[name=engine]:checked").val();

        keyword = keyword.replace(/%/gi, "%25");
        keyword = keyword.replace(/ /gi, "%20");
        keyword = keyword.replace(/#/gi, "%23");

        if (engine == "google") {
            keyword = "https://google.com/search?q="+keyword;
            $("#url").html("<a href='"+keyword+"' target='_blank'>"+keyword+"</a>");
            $("#hider").show();
        } else if (engine == "bing") {
            keyword = "https://bing.com/search?q="+keyword;
            $("#url").html("<a href='"+keyword+"' target='_blank'>"+keyword+"</a>");
            $("#hider").show();
        } else {
            $("#url").html("Select a search engine.");
            $("#hider").show();
        }
    })
});
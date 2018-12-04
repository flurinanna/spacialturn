$(function () {
    var headerNames = $(".navigation");
    headerNames.each(function (i, el) {
        $(".contentWindow").hide();
        $(".contentWindow.projects").show();
        el = $(el);
        el.click(function (event) {
            $(".contentWindow").hide();
            $(".contentWindow." + el.data("nav")).show();
            if(el.data("nav") === "about") {
            }
        })
    })
})

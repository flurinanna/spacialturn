$(function () {
    var headerNames = $(".navigation");
    headerNames.each(function (i, el) {
        $(".contentWindow").hide();
        $(".contentWindow.projects").show();
        el = $(el);
        el.click(function (event) {
            $(".contentWindow").hide();
             $(".contentWindow." + el.data("nav")).show();
            if(el.data("nav") === "projects") {
                openChoosenProjectWindow(el.data("subwindow"))
            }

        })
    })
})

$(function openChoosenProjectWindow(subwindow) {
    var projectNames = $(".project");
    projectNames.each(function (i, el) {
        el = $(el);
        el.click(function (event) {
            $(".contentWindow").hide();
            $(".contentWindow." + whichWindow + (subwindow ? "." + subwindow : "")).show();
            $(".contentWindow." + el.data("nav")).show();
            if(el.data("nav") === "about") {
            }
        })
    })
})

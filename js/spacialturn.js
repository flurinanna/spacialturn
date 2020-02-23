$(function () {
    var headerNames = $(".navigation");
    headerNames.each(function (i, el) {
        $(".contentWindow").hide();
        $(".contentWindow.projects").show();
        el = $(el);
        el.click(function (event) {
            $(".contentWindow").hide();
            $(".contentWindow." + el.data("nav")).show();
        })
    })
    var projectNames = $(".project");
    projectNames.each(function (i, el) {
        el = $(el);
        el.click(function (event) {
            $(".contentWindow").hide();
            $(".contentWindow." + el.data("subwindow")).show();
        })
    })


   
    
})

